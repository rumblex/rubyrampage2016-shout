$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    $('body').toggleClass('is-locked');
    e.preventDefault();
    $('.hamburguer').toggleClass('open');
  });
});
