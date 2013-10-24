$(document).ready(function() {
        $("a.anchorLink").anchorAnimate()

var scroll_pos = 0;
var scroll_time;

$(window).scroll(function() {
    clearTimeout(scroll_time);
    var current_scroll = $(window).scrollTop();
    
    if (current_scroll >= $('#topNav').outerHeight()) {
        if (current_scroll <= scroll_pos) {
            $('#topNav').removeClass('hidden');    
        }
        else {
            $('#topNav').addClass('hidden');  
        }
    }
    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 25);
});


});





















