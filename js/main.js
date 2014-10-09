var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipper = $('.dipper');
var $dipperSection = $('.dipper-section');
var $shuttle = $('.shuttle');
var $shuttleSection = $('.shuttle-section');


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, {offset: '50%'});

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-launch');
}, {offset: '50%'});



//offset helps determine how far down the waypoint goes down from the top.