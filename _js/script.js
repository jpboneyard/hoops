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


});





















