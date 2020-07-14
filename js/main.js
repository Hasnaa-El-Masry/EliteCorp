$(function(){
    
    //Adjust Header Height:

 var windowHeight = $(window).height(),
        upperBarHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();

    $('header, header .carousel-item').height(windowHeight - (upperBarHeight + navHeight)) ;

    // Featured Work Shuffle:
    $('.featured-work ul li').on('click',function(){

      $(this).addClass('active').siblings().removeClass('active');

      if( $(this).data('class') === 'all'){

          $('.works .img-item').css({'opacity':'1', 'transform':'scale(1)'});

      }else{

        $('.works .img-item').css({'opacity':'.5' , 'transform':'scale(.5)'});
        $($(this).data('class')).parent().css({'opacity':'1' , 'transform':'scale(1)'})

      }
    })
});