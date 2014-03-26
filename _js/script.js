/*jshint unused:false */
/*global $:false */

$(document).ready(function() {
	'use strict';

	//randomize which ball is loaded on the site
	var images = ['site-ball-7.png', 'site-ball-6.png', 'site-ball-8.png', 'site-ball-9.png'];
	$('<img src="_img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.site-ball-mod');

	$("a.anchorLink").anchorAnimate();

	var scroll_pos = 0;
	var scroll_time;

	var wWidth,
		winHeight,
		scrollArea,
		docHeight,
		topNavHeight;

	function getSizes() {
		wWidth = $(window).width();
		docHeight = $(document).height();
		winHeight = $(window).height();
		scrollArea = docHeight - winHeight;
		topNavHeight = $('#top-nav').outerHeight();
	}
	getSizes();

	$(window).resize(getSizes);

	var scrollTop = 0,
		scroll_time;

	$(window).scroll(function() {

		scrollTop = $(window).scrollTop();
	    if (scrollTop < scrollArea *.95 && wWidth > 400) {

			clearTimeout(scroll_time);

			if (scrollTop <= scroll_pos || scrollTop < topNavHeight) {
				$('#top-nav').removeClass('hidden');
			} else {
				$('#top-nav').addClass('hidden');
			}

			scroll_time = setTimeout(function() {
				scroll_pos = scrollTop;
			}, 25);
		}

		//when viewport reaches about section ball (set up alert box when position
		// reached to test) (testing for position of element relative to viewport)
		// (set up console.log to see what position is)

		if (scrollTop >= docHeight - winHeight - 200) {
	       $(".about-txt-mod").addClass("envelope-open");
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
    $(".intro-subline[data-location='all'] .location-count").text((num_locations - 1));

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

	var lazyImages = $("img.lazy");
	$(window).load(lazyImages, function(){
		lazyImages.lazyload({
		    threshold : 1920
		});
	});

	//open envelope on scroll when about section is reached
	// $(window).scroll(function() {

	// 	var letterClosed = $(window).scrollTop();

	// 	var letterOpen = $('.about-txt-mod').offset().top - ($('.about-txt-mod').height()*0.64);

	// 	if(letterClosed < letterOpen) {
	// 		// do nothing
	// 	} else {
	// 		$("html, body").delay(900).stop().animate;
 //    		$('.about-txt-mod').addClass('envelope-open');
	// 	}
	// });


});
