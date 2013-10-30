$(document).ready(function() {
        $("a.anchorLink").anchorAnimate()

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
	  	console.log('clicked');
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
       if (location == "all") {
           $(".stream-item").show();
       }
       else {
           $(".stream-item").hide();
           $("."+location).show()       
        }
    });

    //when locations is clicked at mobile size add class visible-m-link
    $("#locations-link").click(function(e) {
         e.preventDefault();
    	 $(".hood-list").toggleClass('visible-m-link');
    });

    $('#about-link').click(function(){
        $('.m-nav-toggle').trigger('click');
    });

   

    //when viewport reaches about section ball (set up alert box when position reached to test) (testing for position of element relative to viewport) (set up console.log to see what position is)


    //becomes position absolute
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 250) {
	       $(".site-ball-mod").addClass('absolute-ball');
	       $(".site-ball-mod").removeClass('fixed-ball');
	       // alert("near bottom!");
	   }
	   else {
	       $(".site-ball-mod").removeClass('absolute-ball');
	       $(".site-ball-mod").addClass('fixed-ball');
	   }
	});

    //when the page loads...
    //if the window width < 761px
    //then set the height of #nav-list-mod to the window height

    //when the window resizes...
    //if the window width < 761px
    //then set the height of #nav-list-mod to the window height




});





















