$(document).ready(function(){
	$(".accordion").on('click', function(){
		$('.section').removeClass('show')
		$(this).find('+ .section').addClass("show")
	})
})

	

