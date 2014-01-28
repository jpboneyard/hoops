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

	var wWidth;
	wWidth = $(window).width();

	$(window).resize(function(){
		wWidth = $(window).width();
	});

	$(window).scroll(function() {
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollArea = docHeight - winHeight;

    if ($(window).scrollTop() < scrollArea *.95) {

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
  
	//when viewport reaches about section ball (set up alert box when position 
	// reached to test) (testing for position of element relative to viewport) 
	// (set up console.log to see what position is)

	//becomes position absolute
	$(window).scroll(function() {

	   if ($(window).scrollTop() >= $(document).height() - $(window).height() -200) {
	       $(".about-txt-mod").addClass("envelope-open");
		}
	});

	$("img.lazy").lazyload({
	    threshold : 1920
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
