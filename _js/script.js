/*jshint unused:false */
/*global $:false */

$(document).ready(function() {
	'use strict';

	$("a.anchorLink").anchorAnimate();

	var scroll_pos = 0;
	var scroll_time;

	var wWidth;
	wWidth = $(window).width();

	$(window).resize(function(){
		wWidth = $(window).width();
	});

	$(window).scroll(function() {
		if (wWidth > 400) {
			clearTimeout(scroll_time);
			var current_scroll = $(window).scrollTop();
			
			if (current_scroll >= $('#top-nav').outerHeight()) {
				if (current_scroll <= scroll_pos) {
					$('#top-nav').removeClass('hidden');    
				}
				else {
					$('#top-nav').addClass('hidden');
				}
			}
			scroll_time = setTimeout(function() {
				scroll_pos = $(window).scrollTop();
			}, 25);
		}
	});

	//Mobile nav toggling action-action-action
	$(".m-nav-toggle").click(function(){
		console.log("clicked");
		$(".nav-link-mod").toggleClass("visible");
		$(".m-nav-toggle").toggleClass('toggle-active');
	});

	//detect click on a location - then filter results based on specific location
	$(".hood-list-item a").click(function(e) {
		e.preventDefault();
		//Remove the active state from whichever button is active
		$(".hood-list-item a.active-link").removeClass('active-link');
		//And add the active state to whichever button was clicked
		$(this).addClass('active-link');

		var location = $(this).data("location");

		//check whether it equals all
		if (location === "all") {
			$(".stream-item").show();
		} else {
			$(".stream-item").hide();
			$("."+location).show();
		}
	});

    $(".hood-list-item a").not('.except-me').each(function() {
        var $this = $(this);

        // console.log($this);

        var location = $this.data("location");

        // console.log(location);

        var searchString = ".stream-item[data-location='" + location + "']";

        // console.log(searchString);

        var location_count = $(searchString).length;

        // console.log(location_count);

        if(location_count == 0) {
            $this.parent().hide();
        } else {
            $this.find(".location-count").text("(" + location_count + ")");
        }

    });

    var num_locations = $(".stream-item").length;
    $(".hood-list-item a[data-location='all'] .location-count").text("(" + (num_locations - 1) + ")");

	//when locations is clicked at mobile size add class visible-m-link
	$("#locations-link").click(function(e) {
		e.preventDefault();	
		$(".hood-list").toggleClass('visible-m-link');
	});

	if (wWidth < 700) {
		$('#about-link').click(function(){
			$('.m-nav-toggle').trigger('click');
		});
	}
  
	//when viewport reaches about section ball (set up alert box when position 
	// reached to test) (testing for position of element relative to viewport) 
	// (set up console.log to see what position is)

	//becomes position absolute
	$(window).scroll(function() {

		var bballtop = $(window).scrollTop();

		var stop = $('.about-txt-mod .kicker').offset().top - ($('.site-ball-mod').height()*0.64);

		if(bballtop > stop) {
			// do nothing
			$('.site-ball-mod').css('margin-top', stop);
		} else {
			$('.site-ball-mod').css('margin-top', bballtop);
		}
	});

	// mouseenter the about-txt-mod
	// setTimout for ...whatever ms, 200
		// that time tells page to scroll to top of #about and adds class envelope-open
	$('.about-txt-mod').on('mouseenter', function() {
		$("html, body").delay(200).stop().animate({ scrollTop: $('#about').offset().top }, 300);
		$('.about-txt-mod').addClass('envelope-open');
	});

	//randomize which ball is loaded on the site
	var images = ['site-ball-7.png', 'site-ball-6.png', 'site-ball-8.png', 'site-ball-9.png'];
	$('<img src="_img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.site-ball-mod');



	//when the page loads...
	//if the window width < 761px
	//then set the height of #nav-list-mod to the window height

	//when the window resizes...
	//if the window width < 761px
	//then set the height of #nav-list-mod to the window height

	//rotate ball on scroll 
		// var theta = $(window).scrollTop() % Math.PI;
		// $('#cog').css({ transform: 'rotate(' + theta + 'rad)' });
});
