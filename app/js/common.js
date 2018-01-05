$(document).ready(function(){

	$(".js-slider").owlCarousel({
		items: 1,
		loop: true
	});

	$('#js-mobile-button').on('click', function() {
		var target = $(this).data('target');
		$(target).toggleClass('menu__list--open');
	});

});