
$(document).ready(function(){

$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var target = $(target);

		$('ul.tabs li a').removeClass('current-tab');
		$(this).addClass('current-tab');

		$('html, #whole').stop().animate({
			scrollTop: target.offset().top - 140 
		}, 900);
	})
});