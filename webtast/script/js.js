<<<<<<< HEAD
$(function(){
    $('.menu').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.menu').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });  
});
// menu



setInterval(function(){
    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'-300px'},500);

    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'-600px'},500);

    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'0'},500);
});

=======
$(function(){
    $('.menu').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.menu').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });  
});
// menu



setInterval(function(){
    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'-300px'},500);

    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'-600px'},500);

    $('.slide_box>ul').delay('2500');
    $('.slide_box>ul').animate({marginTop:'0'},500);
});

>>>>>>> fbbb742b1b771b9dd80b6db9389e05dfea3ea870
// slide