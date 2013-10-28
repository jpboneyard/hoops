$(document).ready(function() {
        $("a.anchorLink").anchorAnimate()

var scroll_pos = 0;
var scroll_time;

$(window).scroll(function() {
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
});

    //Mobile nav toggling action-action-action
	$(".m-nav-toggle").click(function(){
	  	console.log('clicked');
	    $("#nav-link-mod").toggleClass("visible");
	});

    //detect click on a location - then filter results based on specific location
    $(".hood-list-item a").click(function(e) {
        e.preventDefault();
        //Remove the active state from whichever button is active
       $(".hood-list-item a.active").removeClass('active');
        //And add the active state to whichever button was clicked
        $(this).addClass('active');

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

        //when viewport reaches about section ball (set up alert box when position reached to test) (testing for position of element relative to viewport) (set up console.log to see what position is)


        //becomes position absolute


});





















