$(function() {

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

	// слайдер главный
            
	  var jssor_1_options = {
	    $AutoPlay: false,
	    $SlideDuration: 800,
	    $SlideEasing: $Jease$.$OutQuint,
	    $ArrowNavigatorOptions: {
	      $Class: $JssorArrowNavigator$
	    },
	    $BulletNavigatorOptions: {
	      $Class: $JssorBulletNavigator$
	    }
	  };
	var slider_front = new $JssorSlider$("slider_front", jssor_1_options);
	function ScaleSlider() {
		var parentWidth = $('#slider_front').parent().width();
		if (parentWidth) {
			slider_front.$ScaleWidth(parentWidth);
		}
		else
			window.setTimeout(ScaleSlider, 30);
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
  	//responsive code end


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
