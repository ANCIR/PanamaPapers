/*
 * jSpreadSheet
 * @author    <a href="http://ngsdev.org">Atsushi Nagase</a>
 * @copyright Copyright &copy; 2009 Atsushi Nagase
 * @license   Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
;(function($){

	var
		PLUGIN_NAMESPACE = "ss",
		CALLBACK_PREFIX = "sscallback_",
		DEFAULT_PARAM = { version : "0.6" };

	var reqId = 0, cache = {};
	
	function getRandom(length) {
		length = length || 10;
		var r = "",A=65,Z=90,c,i;
		var fc = function(a,b) {
			var c = String.fromCharCode(a);
			return b ? c.toUpperCase():c.toLowerCase();
		}
		while(r.length<length) {
			i = A+Math.floor((Z-A)*Math.random())+(i>Z?0:10);
			c = i>Z?String(i-Z-1):fc(i,Math.random()<0.5);
			if(c&&r[r.length-1]!=c) r+=c;
		}
		return r;
	}
		
	function serializeParam(param) {
		var r = [];
		param.out = "json";
		for(var i in param) {
			r.push([i,param[i]].join(":"));
		}
		return r.join(";");
	}
	
	function ss(url,param) {
		param = $.extend(DEFAULT_PARAM,param);
		var _query,_field;

		function setQuery(query) {
			_query = query;
			return self;
		}
		
		function setField(field) {
			_field = field;
			return self;
		}
		
		function complete(res,callback) {
			if(/^(ok|warning)$/.test(res.status)) {
				var tbl = res.table, rows = [], fld = _field||[];
				if(typeof fld == "string") fld = fld.split(",")
				$.each(tbl.rows,function(){
					var obj = {}, row = this, cols = row.c;
					$.each(cols,function(i){
						obj[fld[i]||i] = (this||{}).v;
					});
					rows.push(obj);
				});
				callback.apply($(rows),[true]);
			} else {
				callback.apply({
					errors : res.errors||[]
				},[false]);
			}
			
		}
		
		function createKey(url) {
			return encodeURIComponent(url);
		}
		
		function send(callback,nocache) {
			var
				cacheKey1 = createKey(url),
				cacheKey2 = createKey(_query||"__NO_QUERY__");
			cache[cacheKey1] = cache[cacheKey1]||{};
			if(!nocache&&cache[cacheKey1][cacheKey2]) {
				complete(cache[cacheKey1][cacheKey2],callback);
				return;
			}
			var rid = reqId++;
			do { var handlerName = CALLBACK_PREFIX+getRandom(20); } while(window[handlerName]);
			function cb(res){
				if(res.reqId==rid.toString()) {
					if(res.table) cache[cacheKey1][cacheKey2] = res;
					complete(res,callback);
				}
				setTimeout(function(){
					try { delete window[handlerName]; } catch(e) {};
				},1);
			};
			window[handlerName] = cb;
			param.responseHandler = handlerName;
			param.reqId = rid;
			var _url = url+"&tqx="+serializeParam(param)+"&tq="+encodeURIComponent(_query||"");
			$.ajax({
				url:_url,
				type: "GET",
				dataType: "script",
				scriptCharset: "utf-8",
				data: null
			});
		}
		
		var self = {
			setQuery : setQuery,
			setField : setField,
			send : send
		}
	
		return self;
	}

	$[PLUGIN_NAMESPACE] = ss;
	
})(jQuery);
