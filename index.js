
$(document).ready(function(){

/*$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = $(this.hash);

		$('ul.tabs li a').removeClass('current-tab');
		$(this).addClass('current-tab');

		$('#whole').stop().animate({
				'scrollTop': target.offset().top-140
			}, 900);
	})*/

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current-tab');
		$('.tab-content').removeClass('current');

		$(this).addClass('current-tab');
		$("#"+tab_id).addClass('current');
	})
});