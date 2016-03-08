$( document ).ready(function() {
    construct();
    /*setTimeout (function(){
        
    }, 1500);*/
});

function construct() {
    var a = "";
    
    rute = "http://spreadsheets.google.com/tq?key=1wIaW6HASaNTveidcxr7UpvLgECmd6fh6a_4dObzqsdQ&gid=0";
    query = "select *";
    $.ss(rute).setQuery(query).setField('medicineName,patentedValue,genericValue,percentdifference,colSize').send(function(b) {
        this.each(function(c) {
            a += '<div class="wrapper">';
            a += '<div class="cont">'; 
            a += '<a class="top">'; 
            a += '<span class="tooltip">'; 
            a += this.medicineName + '<br>' + '<b>PATENTED:</b><br>'; 
            a += '<blockquote><i style="font-weight:100">R </i>' + this.patentedValue + '</blockquote>'; 
            a += '</span>'; 
            a += '</a>'; 
            a += '<a class="barra" style="height:' + this.colSize + 'px' + '">';
            a += '<span class="ttip">' + this.percentdifference.toFixed(1) + '%' + '</span>'; 
            a += '</a>'; 
            a += '<a class="bottom">'; 
            a += '<span class="tooltip">'; 
            a +=  this.medicineName + '<br>' + '<b>GENERIC:</b><br>'; 
            a += '<blockquote><i style="font-weight:100">R </i>' + this.genericValue + '</blockquote>'; 
            a += '</span>'; 
            a += '</a>';  
            a += '</div>';  
            a += '</div>'; 
        });
        $(a).appendTo('.columns');
    });
}