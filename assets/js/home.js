/*function ReceberNumeroSorte(){

  d = document.numero_sorte;
  erro = false;
              
  if(d.cpf_home.value==""){
    erro=true; 
  } 
  if (erro) {
     $('#cpf_invalido_home').html(texto).css('display', 'block');
  } else {
    d.submit();
  }
}*/

$(document).ready(function() {

  //banner
  
  // hd-dots

  $('.hd-dots .dot1').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-2');
    $('.home header').removeClass('bg-3');
    $('.home header').addClass('bg-1');
  });

  $('.hd-dots .dot2').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-1');
    $('.home header').removeClass('bg-3');
    $('.home header').addClass('bg-2');
  });

  $('.hd-dots .dot3').on('click', function (e) {
    e.preventDefault();
    $('.home header').removeClass('bg-1');
    $('.home header').removeClass('bg-2');
    $('.home header').addClass('bg-3');
  });

  // hd-nav
  $('.hd-nav .hd-prev').on('click', function (e) {
    e.preventDefault();
    if($('.home header').hasClass('bg-1')) {
      $('.home header').removeClass('bg-1');
      $('.home header').addClass('bg-3');
    } else if($('.home header').hasClass('bg-2')) {
      $('.home header').removeClass('bg-2');
      $('.home header').addClass('bg-1');
    } else if($('.home header').hasClass('bg-3')) {
      $('.home header').removeClass('bg-3');
      $('.home header').addClass('bg-2');
    }
  });

  // hd-nav
  $('.hd-nav .hd-next').on('click', function (e) {
    e.preventDefault();
    if($('.home header').hasClass('bg-1')) {
      $('.home header').removeClass('bg-1');
      $('.home header').addClass('bg-2');
    } else if($('.home header').hasClass('bg-2')) {
      $('.home header').removeClass('bg-2');
      $('.home header').addClass('bg-3');
    } else if($('.home header').hasClass('bg-3')) {
      $('.home header').removeClass('bg-3');
      $('.home header').addClass('bg-1');
    }
  });

});