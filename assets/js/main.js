$(document).ready(function() {

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