
$(function(){
   $('#wh').click(function(){
    $('.wh').css("display","block").fadeIn();
    $('.bl').css("display","none").fadeOut();
    $('.hg').css("display","none").fadeOut();
    $('.ng').css("display","none").fadeOut();
    $('.ob').css("display","none").fadeOut();
    $('.mb').css("display","none").fadeOut();
    $('.fr').css("display","none").fadeOut();
   });
   
   $('#bl').click(function(){
      $('.bl').css("display","block").fadeIn();
      $('.wh').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#hg').click(function(){
      $('.hg').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ng').click(function(){
      $('.ng').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ob').click(function(){
      $('.ob').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#mb').click(function(){
      $('.mb').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#fr').click(function(){
      $('.fr').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
     });
  
});

// hover
$(function(){
   $('.inner_left_wrab').mouseenter(function(){
      $('.more_icon').fadeIn();
      $('.inner_left_img').css('transform','scale(1.2');
   });
   $('.inner_left_wrab').mouseleave(function(){
      $('.more_icon').fadeOut();
      $('.inner_left_img').css('transform','scale(1)');
   });
})