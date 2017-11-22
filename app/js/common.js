 $(document).ready(function() {
      var videobackground = new $.backgroundVideo($('.header'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "media/",
        "filename": "cloud",
        "types": ["mp4","ogg","webm"]
      });

  $('.hamburger').click(function(){
		$('.menu-burger').addClass('is-active');
	});
	$('.close').click(function(){
		$('.menu-burger').removeClass('is-active');
	});

	var mql = window.matchMedia('(max-width: 768px)');
	if (mql.matches) {
	    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	} 
	var mql = window.matchMedia('(max-width: 480px)');
	if (mql.matches) {
	    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	} 
	$(window).resize(function () {
    var widthWind = $(this).width();

    if (widthWind <= 750) {
    	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
    if (widthWind <= 480) {
    	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
  });

});
