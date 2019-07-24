$(document).ready(function() {
	$(".l-content div").hide(); // Initially hide all content
	$(".l-pic li:first").attr("class","current"); // Activate first tab
	$(".l-content div:first").fadeIn(); // Show first tab content
    
    $('.l-pic a').click(function(e) {
        e.preventDefault();        
        $(".l-content div").hide(); //Hide all content
        $(".l-pic li").attr("class",""); //Reset id's
        $(this).parent().attr("class","current"); // Activate this
        $('.' + $(this).attr('class')).fadeIn(); // Show content for current tab
    });
})();