$(function() {

	// Активатор версии для слабовидящих
	$(".versionContrastActivator").click(function(){
		if ( $(this).hasClass('versionContrastDeactivator') ) {
			$('.versionContrastActivator h4').html('Версия для слабовидящих'); 
			$(this).addClass("versionContrastDeactivator");
		}
		else {
			$('.versionContrastActivator h4').html('ОБЫЧНАЯ ВЕРСИЯ'); //  сохраняем обьект в переменную myUl
		}
		$("body").toggleClass("contrast");
		return false;
	});

	// соглашение правил в форме
	$("#acceptRulesLabel").click(function(){
		console.log("done1");
		if ( $("#acceptRules").attr("checked") != 'checked' ) {
			$("#acceptSubmit").prop('disabled', true);
			console.log("done");
		}
		else $("#acceptSubmit").prop('disabled', false);

	});

  //	активация вкладок обратной связи
  $(".tabs").lightTabs();

	// панели
	$(".open-panels__link").click(function(){
		$(this).next().slideToggle(300);
		$(this).toggleClass("opened");
	});

	// активация плагина галереи
	$(".fancybox").fancybox();

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

	// уменьшение меню при скролле
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
