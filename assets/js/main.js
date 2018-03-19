$(document).ready(function() {

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