$(document).ready(function() {

  // Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
      }
   });

  // back to top

  $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: 0}, 700);
  });

  // Fixed

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 768) {
      $('.back-to-top').addClass('fixed');
    } else {
      $('.back-to-top').removeClass('fixed');
    }
  }).scroll();

  // End: back to top

});