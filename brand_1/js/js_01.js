
$(function(){
   $('#wh').click(function(){
   $('#wh').css("border","3px solid #999"); 
    $('#bl').css("border","1px solid #999");
    $('#hg').css("border","1px solid #999");
    $('#ng').css("border","1px solid #999");
    $('#ob').css("border","1px solid #999");
    $('#mb').css("border","1px solid #999");
    $('#fr').css("border","1px solid #999");

    $('.wh').css("display","block").fadeIn();
    $('.bl').css("display","none").fadeOut();
    $('.hg').css("display","none").fadeOut();
    $('.ng').css("display","none").fadeOut();
    $('.ob').css("display","none").fadeOut();
    $('.mb').css("display","none").fadeOut();
    $('.fr').css("display","none").fadeOut();
   });
   
   $('#bl').click(function(){
      $('#bl').css("border","3px solid #999"); 
    $('#wh').css("border","1px solid #999");
    $('#hg').css("border","1px solid #999");
    $('#ng').css("border","1px solid #999");
    $('#ob').css("border","1px solid #999");
    $('#mb').css("border","1px solid #999");
    $('#fr').css("border","1px solid #999");

      $('.bl').css("display","block").fadeIn();
      $('.wh').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#hg').click(function(){
      $('#hg').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.hg').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ng').click(function(){
      $('#ng').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.ng').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ob').click(function(){
      $('#ob').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.ob').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#mb').click(function(){
      $('#mb').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.mb').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#fr').click(function(){
      $('#fr').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");

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
//tooltip
$(document).ready(function(){
   $('[data-tooltip]').tooltip();
 });
 //tab
 $(function(){
   $('#t-1').click(function(){
      $('#tbox-1').css("display","block").fadeIn();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-2').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","block").fadeIn();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-3').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","block").fadeIn();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-4').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","block").fadeIn();
   });
 });