$(function(){
    
    $('#w01').click(function(){
        $('.w01').fadeIn();
        $('.s02').css('diplay','none').fadeOut();
        
    });
    $('#w02').click(function(){
        $('.w01').css('diplay','none').fadeOut();
        $('.s02').fadeIn();
       
    });
   

    
});

// text-center
// div 감싸는 것 /차이점 position /overflow hidden
// https://github.com/commaeng09/web

// function tab01(){
//     $('.w01').css('diplay','block').fadeIn();
//     $('.s02').css('diplay','none').fadeOut();            
// };
// function tab02(){
//     $('.w01').css('diplay','none').fadeIn();
//     $('.s02').css('diplay','block').fadeOut();            
// };