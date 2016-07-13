$(function() {

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


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
