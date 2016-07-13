$(function() {

	// поиск в шапку
	$(document).on('click', function(e) {
	  if (!$(e.target).closest("header").length) {
	    $('.header__search').slideUp(300);//закрытие
	  }
	  e.stopPropagation();
	});
	$(".open-search").click(function(){
		$(".header__search").slideToggle(300);//открытие
		$(".header__search__input").focus();
	});
	$(".icon-x").click(function(){
		$(".header__search").slideUp(300);//закрытие
	});
	// $(".header__search__input").blur(function(){
	// 	$(".header__search").slideUp(300);//закрытие
	// });

	// сладер на главной
	$("#slider-front").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: false,
      pagination: true,
      addClassActive : true,
      itemsScaleUp: true
  });

	//	параллакс
	$(window).scroll(function() {
		if ( $(window).width() > 768 ) {
			var st = ($(this).scrollTop() - 60) / 20;
			$(".parallax-front").css({
				"transform" : "translate3d(0px, -" + st  + "%, .01px)",
				"-webkit-transform" : "translate3d(0px, -" + st  + "%, .01px)"
			});
		}
	});

	// скролл меню
	function scrollMenu() {
		if ( $(window).width() > 1200 ) {
			$(window).scroll(function () {
				if ( $(window).scrollTop() > 150 && $(window).width() > 1200 ) $("header").addClass("small-zoom");
				else $("header").removeClass("small-zoom");
			});  
		}
	};
	scrollMenu();
	$(window).bind("load", scrollMenu);
	$(window).bind("resize", scrollMenu);
	$(window).bind("orientationchange", scrollMenu);

});
