$(document).ready(function() {

  //banner home

  $('.dots span#dot1').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-2');
    $('.home header').removeClass('bg-3');
    $('.home header').addClass('bg-1');
  });

  $('.dots span#dot2').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-1');
    $('.home header').removeClass('bg-3');
    $('.home header').addClass('bg-2');
  });

  $('.dots span#dot3').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-1');
    $('.home header').removeClass('bg-2');
    $('.home header').addClass('bg-3');
  });


  // Ancora

  $(".acr").click(function(event){        
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
   });

  // End: Ancora

  // back to top

  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0}, 700);
  });

  // Fixed

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 668) {
      $('.back-to-top').addClass('fixed');
    } else {
      $('.back-to-top').removeClass('fixed');
    }
  }).scroll();

  // End: back to top

});