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

// show services item
$(window).on('resize', function(){
  var $item = $('.service__item'),
      delayStep = 200;

  // hide elements on resize
  if ($('.service__show-btn').is(':visible')) {
    if( $( window ).width() <= 959 ) {
      $item.slice(4, ($item.length))
           .hide();
    }
    if( $( window ).width() <= 1199) {
      $item.slice(6, ($item.length))
           .hide();
    }
  }
  
  // Show hidden elements with fadein animation
  $(document).on("click", ".service__show-btn", (function(e) {
    e.preventDefault();
    $('.service__item:hidden').each(function() {
      $(this).delay(delayStep).fadeIn();
      delayStep += delayStep;
    });
    $('.service__show-btn').hide();
  }));

}).trigger('resize');

