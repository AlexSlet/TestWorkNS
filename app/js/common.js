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
});
