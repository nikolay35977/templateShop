$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight() + $("#upper__menu").innerHeight() + $("#header__id").innerHeight(),
		scrollOffset = $(window).scrollTop();

	/* fixed header */
	checkScroll(scrollOffset);
	
	$(window).on("scroll", function(){

		scrollOffset = $(this).scrollTop();
		console.log(introH);
		checkScroll(scrollOffset);
	});
	
	function checkScroll(scrollOffset){

		if (scrollOffset >= introH){
			header.addClass("fixed");

		}
		else{
			header.removeClass("fixed");
		}
	}
	
	/* Menu nav toggle  */
	$("#nav-togle").on("click", function(event){
		event.preventDefault();
	
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

		
	});
	
});