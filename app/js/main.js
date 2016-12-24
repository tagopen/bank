// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 
// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

$('.slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  appendDots: '.slider__markers',
  speed: 500,
  swipeToSlide: '15',
  cssEase: 'ease-out'
});

// Equial Height
$(window).on('resize', function(){
  if( $( window ).width() >= 768 ) {
    $('.service__item').equialHeight();
    $('.product__text').equialHeight();
  }
}).trigger('resize');

$(window).on('resize', function(){
  if( $( window ).width() <=967 ) {
    $(document).ready( function () {
      $('.service__item').slice(4).hide();
      $(document).on("click", ".service__show-btn", (function(e) {
        e.preventDefault();
        $('.service__item').show();
        $('.service__show-btn').hide();
      }));
    });
  }
  if( $( window ).width() < 1200) {    /*Не знаю корректно ли задал это условие , и возможно, можно было код короче сделать, тут уже если надо переделай и да, там еще перебей в бутстрапе колонки, (надо что бы при 960-1199 уже было md, а оно по прежнему срабатывает при 992+)*/
    $(document).ready( function () {
      $('.service__item').slice(6).hide();
      $(document).on("click", ".service__show-btn", (function(e) {
        e.preventDefault();
        $('.service__item').show();
        $('.service__show-btn').hide();
      }));
    });
  }
}).trigger('resize');