$( document ).ready(function() {
    configuration01();
    $('#menu_01').addClass('current');
    initialPoss();
});
$('#menu_01').click(function(){
    clearMenu();configuration01();
    $('#menu_01').addClass('current');
    initialPoss();
    $('#hint').animate({opacity: 0}, 1500);
});
$('#menu_02').click(function(){
    clearMenu();
    configuration02();
    $('#menu_02').addClass('current');
    initialPoss();
    $('.right a.ph01').velocity({ translateX:"210%", translateY:"-110%",}, { duration: 500 },"easeInOutSine");
    $('.right a.ph09').velocity({ translateX:"-20%", translateY:"0%",}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph02, .left a.ph06, .left a.ph07, .right a.ph08').velocity({backgroundColor: "#67bdcc", backgroundColorAlpha: 0.8}, { duration: 1400 });
    $('#hint').animate({opacity: 0}, 1500);
});
$('#menu_03').click(function(){
    clearMenu();configuration03();
    $('#menu_03').addClass('current');
    $('.right a.ph01').velocity({ translateX:"0%", translateY:"0%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph05').velocity({ translateX:"140%", translateY:"50%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph07').velocity({ translateX:"-100%", translateY:"90%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph09').velocity({ translateX:"20%", translateY:"-120%",}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph08').velocity({ translateX:"-160%", translateY:"70%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph04').velocity({ translateX:"-120%", translateY:"-90%"}, { duration: 1000 },"easeInOutSine");
    $('#hint').animate({opacity: 0}, 1500);
});
$('#menu_04').click(function(){
    clearMenu();configuration04();
    $('#menu_04').addClass('current');
    $('.right a.ph01').velocity({ translateX:"0%", translateY:"0%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph05').velocity({ translateX:"140%", translateY:"50%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph07').velocity({ translateX:"-100%", translateY:"90%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph09').velocity({ translateX:"20%", translateY:"-120%",}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph08').velocity({ translateX:"-160%", translateY:"70%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph04').velocity({ translateX:"-120%", translateY:"-90%"}, { duration: 1000 },"easeInOutSine");
    $('#hint').animate({opacity: 0}, 1500);
});
$('#menu_05').click(function(){
    clearMenu();configuration05();
    $('#menu_05').addClass('current');
    $('.right a.ph01').velocity({ translateX:"0%", translateY:"0%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph05').velocity({ translateX:"140%", translateY:"50%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph07').velocity({ translateX:"-100%", translateY:"90%",}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph09').velocity({ translateX:"20%", translateY:"-120%",}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph08').velocity({ translateX:"-160%", translateY:"70%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph04').velocity({ translateX:"-120%", translateY:"-90%"}, { duration: 1000 },"easeInOutSine");
    $('#hint').animate({opacity: 0}, 1500);
});

function initialPoss(){
    $('.left a.ph01').velocity({ translateX:"0%", translateY:"-10%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph02').velocity({ translateX:"50%", translateY:"-100%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph03').velocity({ translateX:"100%", translateY:"-160%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph04').velocity({ translateX:"150%", translateY:"-140%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph05').velocity({ translateX:"200%", translateY:"-100%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph06').velocity({ translateX:"-50%", translateY:"10%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph07').velocity({ translateX:"-100%", translateY:"100%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph08').velocity({ translateX:"-150%", translateY:"160%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph09').velocity({ translateX:"-200%", translateY:"140%"}, { duration: 1000 },"easeInOutSine");
    $('.left a.ph10').velocity({ translateX:"-250%", translateY:"120%"}, { duration: 1000 },"easeInOutSine");
    
    $('.right a.ph01').velocity({ translateX:"200%", translateY:"-300%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph02').velocity({ translateX:"150%", translateY:"-200%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph03').velocity({ translateX:"0%", translateY:"0%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph04').velocity({ translateX:"100%", translateY:"200%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph05').velocity({ translateX:"50%", translateY:"100%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph06').velocity({ translateX:"-50%", translateY:"200%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph07').velocity({ translateX:"-100%", translateY:"300%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph08').velocity({ translateX:"-150%", translateY:"400%"}, { duration: 1000 },"easeInOutSine");
    $('.right a.ph09').velocity({ translateX:"-200%", translateY:"500%"}, { duration: 1000 },"easeInOutSine");
} 
function clearMenu(){
    $('#menu_01').removeClass('current');
    $('#menu_02').removeClass('current');
    $('#menu_03').removeClass('current');
    $('#menu_04').removeClass('current');
    $('#menu_05').removeClass('current');
    $('a.doot .tooltip blockquote').text('');
    $('.left a.doot').velocity({backgroundColor: "#793b3b", backgroundColorAlpha: 0.6}, { duration: 400 });
    $('.right a.doot').velocity({backgroundColor: "#646464", backgroundColorAlpha: 0.6}, { duration: 400 });
}
function configuration01(){
    clearMenu();
    $('.left a.ph01 span blockquote').append('Intangible:<br> <b>$1.7 billion</b>');
    $('.left a.ph02 span blockquote').append('Intangible:<br> <b>$35 billion</b>');
    $('.left a.ph03 span blockquote').append('Intangible:<br> <b>$2.8 billion</b>');
    $('.left a.ph04 span blockquote').append('Intangible:<br> <b>$20.3 billion</b>');
    $('.left a.ph05 span blockquote').append('Intangible:<br> <b>$6.1 billion</b>');
    $('.left a.ph06 span blockquote').append('Intangible:<br> <b>$1.5 billion</b>');
    $('.left a.ph07 span blockquote').append('Intangible:<br> <b>$12.6 billion</b>');
    $('.left a.ph08 span blockquote').append('Intangible:<br> <b>$27.2 billion</b>');
    $('.left a.ph09 span blockquote').append('Intangible:<br> <b>$11 billion</b>');
    $('.left a.ph10 span blockquote').append('Intangible:<br> <b>$2 billion</b>');
    
    $('.right a.ph01 span blockquote').append('Intangible:<br> <b>$4.85b</b>');
    $('.right a.ph02 span blockquote').append('Intangible:<br> <b> - - </b>');
    $('.right a.ph03 span blockquote').append('Intangible:<br> <b>$520m</b>');
    $('.right a.ph04 span blockquote').append('Intangible:<br> <b>$71.0 billion</b>');
    $('.right a.ph05 span blockquote').append('Intangible:<br> <b>$14.2 billion</b>');
    $('.right a.ph06 span blockquote').append('Intangible:<br> <b>$281m</b>');
    $('.right a.ph07 span blockquote').append('Intangible:<br> <b> - - </b>');
    $('.right a.ph08 span blockquote').append('Intangible:<br> <b>$748 million</b>');
    $('.right a.ph09 span blockquote').append('Intangible:<br> <b> - - </b>');
    
    $('.left a.ph01').delay(200).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph02').delay(250).velocity({ width:"99px", height:"99px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph03').delay(300).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph04').delay(350).velocity({ width:"57px", height:"57px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph05').delay(400).velocity({ width:"17px", height:"17px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph06').delay(450).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph07').delay(500).velocity({ width:"35px", height:"35px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph08').delay(550).velocity({ width:"77px", height:"77px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph09').delay(600).velocity({ width:"31px", height:"31px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph10').delay(650).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    
    $('.right a.ph01').delay(200).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph02').delay(250).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph03').delay(300).velocity({ width:"200px", height:"200px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph04').delay(350).velocity({ width:"40px", height:"40px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph05').delay(400).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph06').delay(450).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph07').delay(500).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph08').delay(550).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph09').delay(600).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
}
function configuration02(){
    clearMenu();
    $('.left a.ph01 span blockquote').append('Net tangible assets:<br> <b>$6 billion</b>');
    $('.left a.ph02 span blockquote').append('Net tangible assets:<br> <b>-$5.9 billion</b>');
    $('.left a.ph03 span blockquote').append('Net tangible assets:<br> <b>$10.7 billion</b>');
    $('.left a.ph04 span blockquote').append('Net tangible assets:<br> <b>$15.2 billion</b>');
    $('.left a.ph05 span blockquote').append('Net tangible assets:<br> <b>$5.2 billion</b>');
    $('.left a.ph06 span blockquote').append('Net tangible assets:<br> <b>-$5.6 billion</b>');
    $('.left a.ph07 span blockquote').append('Net tangible assets:<br> <b>-$1.7 billion</b>');
    $('.left a.ph08 span blockquote').append('Net tangible assets:<br> <b>$20.6 billion</b>');
    $('.left a.ph09 span blockquote').append('Net tangible assets:<br> <b>$3.1 billion</b>');
    $('.left a.ph10 span blockquote').append('Net tangible assets:<br> <b>$2.1 billion</b>');
    
    $('.right a.ph01 span blockquote').append('Net tangible assets:<br> <b>$58.3 billion</b>');
    $('.right a.ph02 span blockquote').append('Net tangible assets:<br> <b>$10.1 billion</b>');
    $('.right a.ph03 span blockquote').append('Net tangible assets:<br> <b>$3.7 billion</b>');
    $('.right a.ph04 span blockquote').append('Net tangible assets:<br> <b>$9.5 billion</b>');
    $('.right a.ph05 span blockquote').append('Net tangible assets:<br> <b>$3.9 billion</b>');
    $('.right a.ph06 span blockquote').append('Net tangible assets:<br> <b>$12.2 billion</b>');
    $('.right a.ph07 span blockquote').append('Net tangible assets:<br> <b>$1.55 billion</b>');
    $('.right a.ph08 span blockquote').append('Net tangible assets:<br> <b>-$2.1 billion</b>');
    $('.right a.ph09 span blockquote').append('Net tangible assets:<br> <b>$174 billion</b>');
    
    $('.left a.ph01').delay(200).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph02').delay(250).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph03').delay(300).velocity({ width:"12px", height:"12px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph04').delay(350).velocity({ width:"17px", height:"17px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph05').delay(400).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph06').delay(450).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph07').delay(500).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph08').delay(550).velocity({ width:"24px", height:"24px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph09').delay(600).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph10').delay(650).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    
    $('.right a.ph01').delay(200).velocity({ width:"67px", height:"67px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph02').delay(250).velocity({ width:"11px", height:"11px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph03').delay(300).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph04').delay(350).velocity({ width:"11px", height:"11px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph05').delay(400).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph06').delay(450).velocity({ width:"14px", height:"14px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph07').delay(500).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph08').delay(550).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph09').delay(600).velocity({ width:"200px", height:"200px"}, { duration: 600 },"easeOutBack");
}
function configuration03(){
    clearMenu();
    $('.left a.ph01 span blockquote').append('Unremitted foreign earnings:<br> <b>$24 billion</b>');
    $('.left a.ph02 span blockquote').append('Unremitted foreign earnings:<br> <b>$74 billion</b>');
    $('.left a.ph03 span blockquote').append('Unremitted foreign earnings:<br> <b>$23.74 billion</b>');
    $('.left a.ph04 span blockquote').append('Unremitted foreign earnings:<br> <b>$60 billion</b>');
    $('.left a.ph05 span blockquote').append('Unremitted foreign earnings:<br> <b>$23 billion </b>');
    $('.left a.ph06 span blockquote').append('Unremitted foreign earnings:<br> <b>$23 billion </b>');
    $('.left a.ph07 span blockquote').append('Unremitted foreign earnings:<br> <b>$29.3 billion</b>');
    $('.left a.ph08 span blockquote').append('Unremitted foreign earnings:<br> <b>$53.4 billion</b>');
    $('.left a.ph09 span blockquote').append('Unremitted foreign earnings:<br> <b>$15.5 billion</b>');
    $('.left a.ph10 span blockquote').append('Unremitted foreign earnings:<br> <b>$13.9 billion</b>');
    
    $('.right a.ph01 span blockquote').append('Unremitted foreign earnings:<br> <b>$92.9 billion</b>');
    $('.right a.ph02 span blockquote').append('Unremitted foreign earnings:<br> <b>$15.4 billion</b>');
    $('.right a.ph03 span blockquote').append('Unremitted foreign earnings:<br> <b>$2.8 billion</b>');
    $('.right a.ph04 span blockquote').append('Unremitted foreign earnings:<br> <b>$1.9 billion</b>');
    $('.right a.ph05 span blockquote').append('Unremitted foreign earnings:<br> <b>$33 billion</b>');
    $('.right a.ph06 span blockquote').append('Unremitted foreign earnings:<br> <b>$8.3 billion</b>');
    $('.right a.ph07 span blockquote').append('Unremitted foreign earnings:<br> <b>$6.4 billion</b>');
    $('.right a.ph08 span blockquote').append('Unremitted foreign earnings:<br> <b>$5.6 billion</b>');
    $('.right a.ph09 span blockquote').append('Unremitted foreign earnings:<br> <b>$51 billion</b>');
    
    $('.left a.ph01').delay(200).velocity({ width:"52px", height:"52px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph02').delay(250).velocity({ width:"159px", height:"159px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph03').delay(300).velocity({ width:"51px", height:"51px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph04').delay(350).velocity({ width:"129px", height:"129px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph05').delay(400).velocity({ width:"50px", height:"50px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph06').delay(450).velocity({ width:"50px", height:"50px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph07').delay(500).velocity({ width:"63px", height:"63px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph08').delay(550).velocity({ width:"115px", height:"115px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph09').delay(600).velocity({ width:"33px", height:"33px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph10').delay(650).velocity({ width:"30px", height:"30px"}, { duration: 600 },"easeOutBack");
    
    $('.right a.ph01').delay(200).velocity({ width:"200px", height:"200px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph02').delay(250).velocity({ width:"33px", height:"33px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph03').delay(300).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph04').delay(350).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph05').delay(400).velocity({ width:"71px", height:"71px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph06').delay(450).velocity({ width:"18px", height:"18px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph07').delay(500).velocity({ width:"14px", height:"14px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph08').delay(550).velocity({ width:"12px", height:"12px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph09').delay(600).velocity({ width:"110px", height:"110px"}, { duration: 600 },"easeOutBack");
}
function configuration04(){
    clearMenu();
    $('.left a.ph01 span blockquote').append('Tax avoided:<br> <b>$8.4 billion</b>');
    $('.left a.ph02 span blockquote').append('Tax avoided:<br> <b>$25.9 billion</b>');
    $('.left a.ph03 span blockquote').append('Tax avoided:<br> <b>$8.2 billion</b>');
    $('.left a.ph04 span blockquote').append('Tax avoided:<br> <b>$21 billion</b>');
    $('.left a.ph05 span blockquote').append('Tax avoided:<br> <b>$8.05 billion</b>');
    $('.left a.ph06 span blockquote').append('Tax avoided:<br> <b>$8.05 billion</b>');
    $('.left a.ph07 span blockquote').append('Tax avoided:<br> <b>$10.5 billion</b>');
    $('.left a.ph08 span blockquote').append('Tax avoided:<br> <b>$18.6 billion</b>');
    $('.left a.ph09 span blockquote').append('Tax avoided:<br> <b>$5.5 billion</b>');
    $('.left a.ph10 span blockquote').append('Tax avoided:<br> <b>$4.2 billion</b>');
    
    $('.right a.ph01 span blockquote').append('Tax avoided:<br> <b>$32.5 billion</b>');
    $('.right a.ph02 span blockquote').append('Tax avoided:<br> <b>$5.39 billion</b>');
    $('.right a.ph03 span blockquote').append('Tax avoided:<br> <b>$980 million</b>');
    $('.right a.ph04 span blockquote').append('Tax avoided:<br> <b>$665 million</b>');
    $('.right a.ph05 span blockquote').append('Tax avoided:<br> <b>$11.5 billion</b>');
    $('.right a.ph06 span blockquote').append('Tax avoided:<br> <b>$2.9 billion</b>');
    $('.right a.ph07 span blockquote').append('Tax avoided:<br> <b>$2.2 billion</b>');
    $('.right a.ph08 span blockquote').append('Tax avoided:<br> <b>$1.96 billion</b>');
    $('.right a.ph09 span blockquote').append('Tax avoided:<br> <b>$15.85 billion</b>');
    
    $('.left a.ph01').delay(200).velocity({ width:"52px", height:"52px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph02').delay(250).velocity({ width:"159px", height:"159px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph03').delay(300).velocity({ width:"50px", height:"50px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph04').delay(350).velocity({ width:"129px", height:"129px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph05').delay(400).velocity({ width:"52px", height:"52px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph06').delay(450).velocity({ width:"50px", height:"50px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph07').delay(500).velocity({ width:"65px", height:"65px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph08').delay(550).velocity({ width:"114px", height:"114px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph09').delay(600).velocity({ width:"34px", height:"34px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph10').delay(650).velocity({ width:"26px", height:"26px"}, { duration: 600 },"easeOutBack");
    
    $('.right a.ph01').delay(200).velocity({ width:"200px", height:"200px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph02').delay(250).velocity({ width:"33px", height:"33px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph03').delay(300).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph04').delay(350).velocity({ width:"10px", height:"10px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph05').delay(400).velocity({ width:"71px", height:"71px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph06').delay(450).velocity({ width:"18px", height:"18px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph07').delay(500).velocity({ width:"14px", height:"14px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph08').delay(550).velocity({ width:"12px", height:"12px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph09').delay(600).velocity({ width:"97px", height:"97px"}, { duration: 600 },"easeOutBack");
}
function configuration05(){
    clearMenu();
    //$('.left a.ph01 span blockquote').append('Offshore cash:<br> <b></b>');
    $('.left a.ph02 span blockquote').append('Offshore cash:<br> <b>$26.1 billion</b>');
    //$('.left a.ph03 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph04 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph05 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph06 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph07 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph08 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph09 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.left a.ph10 span blockquote').append('Offshore cash:<br> <b></b>');
    
    $('.right a.ph01 span blockquote').append('Offshore cash:<br> <b>$77.1 billion</b>');
    //$('.right a.ph02 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.right a.ph03 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.right a.ph04 span blockquote').append('Offshore cash:<br> <b></b>');
    $('.right a.ph05 span blockquote').append('Offshore cash:<br> <b>$19.5 billion</b>');
    //$('.right a.ph06 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.right a.ph07 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.right a.ph08 span blockquote').append('Offshore cash:<br> <b></b>');
    //$('.right a.ph09 span blockquote').append('Offshore cash:<br> <b></b>');
    
    $('.left a.ph01').delay(200).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph02').delay(250).velocity({ width:"68px", height:"68px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph03').delay(300).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph04').delay(350).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph05').delay(400).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph06').delay(450).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph07').delay(500).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph08').delay(550).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph09').delay(600).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.left a.ph10').delay(650).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    
    $('.right a.ph01').delay(200).velocity({ width:"200px", height:"200px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph02').delay(250).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph03').delay(300).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph04').delay(350).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph05').delay(400).velocity({ width:"51px", height:"51px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph06').delay(450).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph07').delay(500).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph08').delay(550).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
    $('.right a.ph09').delay(600).velocity({ width:"0px", height:"0px"}, { duration: 600 },"easeOutBack");
}