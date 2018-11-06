$(document).ready(function() {
//каруселЪ
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:1
		}
	}
});

//тень при скролле
$(window).scroll(function() { 
	var top = $(document).scrollTop();
	if (top > 1) {
		$('.fixed').addClass('shadow');
	}
	else {
		$('.fixed').removeClass('shadow');
	}
});


//гамбургер
$(".nav_button").on("click", function (){
	$(".nav").toggleClass("active");
});



//плавное движение экрана на якоря
$("#nav").on("click","a", function (event) 
	{event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
			$(".nav").removeClass("active");		
	});


	//move nav element position according to window width
/*	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});
	*/



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
