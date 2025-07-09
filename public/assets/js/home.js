//carousel
$(window).on('load resize', function(){
	var h = $('.carousel-bg img').height();
	$('#homeCarousel .carousel-item').height(h);
});