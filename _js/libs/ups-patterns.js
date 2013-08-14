$(document).ready(function() {

	$(".style-example").each(function(){
		var $this = $(this);
		var html = $this.html();
		var $code = $this.closest('.style-mod').find('.html-code'); 
		html = html.replace(/</g, "&lt;");
		html = html.replace(/>/g, "&gt;");
		html = html.trim();
		$code.html(html);
	}); 

	$("body").on("click", ".details-trigger", function(){
		var $this = $(this);
		var $mod = $this.closest(".style-mod");
		var $verb = $this.find(".verb");
		var $body = $("body");

		// If it's a standard detail trigger ...
		if ($this.hasClass("code-btn")) {
			// ... add the show command to the parent module
			if ($mod.hasClass("details-off")) {
				$verb.text("Hide");
				$mod.addClass("details-on");
				$mod.removeClass("details-off");
			} else {
				$verb.text("Show");
				$mod.addClass("details-off");
				$mod.removeClass("details-on");
			} 
		// Otherwise it's the show all code button ...  
		} else {
			// so add class to the body
			if ($body.hasClass("details-off")) {
				$verb.text("Hide");
				$body.addClass("details-on");
				$body.removeClass("details-off");
			} else {
				$verb.text("Show");
				$body.addClass("details-off");
				$body.removeClass("details-on");
			} 
		}
	});
	
	$("ul.style-tabs").tabs(".style-panes > .style-pane",{
		current:'active'
	});	

});