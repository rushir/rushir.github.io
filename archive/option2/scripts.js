$(document).ready(function(){

$('#cover').click(function(){
	$(this).fadeOut(1000);
});

	if($(window).width() < 1060){$('body').addClass('small-window');}

	article = $('article:visible');
	timeline = $('.timeline');

	function createTimeline(){

		var timelineLi = $('.timeline li');

		var swap = 510;
		var offset = ($(window).width() - 1004)/2;

		$($('article').get().reverse()).each(function(){
			var that = $(this);
			if(that.data('year') !== '' && that.data('category') !== ''){
				var year = that.data('year');
				var category = that.data('category');
				var id = that.data('id');
				var title = that.data('title');
				$('.timeline li[data-year="' + year + '"] .events-wrap').prepend('<div class="event timeline-' + category + '" data-id="' + id + '"><span class="line"></span></div>');
				var markerPosition = $('.event[data-id="' + id + '"] .line').offset().left - offset + 10;
				if(markerPosition > swap){
					$('.title', that).css({right:1004-markerPosition-31}).addClass('right');
				} else {
					$('.title', that).css({left:markerPosition - 46});
				}
			}
		});

		var firstMarker = $('.events-wrap .event:first-child').offset().left - 6;
		$('.marker').animate({left:firstMarker}, 500);

	}

	createTimeline();

	var current = $('article:first-child');
	currentId = current.data('id');

	function currentInView(){
		var cutoff = $(window).scrollTop() + 150;

		article.each(function(){
			var that = $(this);
			if(that.offset().top + that.height() > cutoff){

				if (currentId !== that.data('id')){
					current = that;
					var marker = $('.events .event[data-id="' + current.data('id') + '"]').offset().left - 6;
					$('.marker').stop(true,true).animate({left:marker}, 200);
					currentId = that.data('id');
				}
				return false;
			}
		});
	}

	move = true;

	$(window).scroll(function() {
		if(move === true){
			currentInView();
		}
	});

	$(window).resize(function() {
		currentInView();
	});


	events = $('.timeline .event');


	function findClosest(){
		var cutoff = $('.marker').offset().left + 3;
		if(cutoff > $('.timeline li:last-child').offset().left){
			var last = $('.timeline li:last-child .event:last-child');
			var lastMarker = last.offset().left - 6;
			var id = last.data('id');
			$('.marker').stop(true,true).animate({left:lastMarker}, 1000);
			move = false;
			$.scrollTo('#event-' + id, 1000, {onAfter:function(){
				move = true;
			}, offset:-100});
			return false;
		} else {
			events.each(function(){
				var that = $(this);
				if(that.offset().left > cutoff){
					var marker = that.offset().left - 6;
					var id = that.data('id');
					$('.marker').stop(true,true).animate({left:marker}, 1000);
					move = false;
					$.scrollTo('#event-' + id, 1000, {onAfter:function(){
						move = true;
					}, offset:-100});
					return false;
				}
			});
		}
	}

	$('.marker').draggable({
		axis: 'x',
		start: function() {
			$(this).addClass('grabbing');
		},
		stop: function() {
			findClosest();
			$(this).removeClass('grabbing');
		}
	});


	$('.read-more').click(function(e){
		$('.more').toggle();
		e.preventDefault();
	});


	$('nav a').click(function(e){
		var that = $(this);
		var sort = that.data('sort');
		var scrolltop = $(window).scrollTop();
		if(that.hasClass('active')){
			that.removeClass('active');
			$('article').show();
			$('.event').removeClass('current').css({opacity:1});
			article = $('article:visible');
			$.scrollTo(scrolltop + 1, {axis:'y'});
			// $.scrollTo(scrolltop, {axis:'y'});
		} else {
			$('nav a').removeClass('active');
			that.addClass('active');
			$('article').hide();
			$('article[data-category="' + sort + '"]').show();
			$('.event').removeClass('current').css({opacity:0});
			$('.event.timeline-' + sort).addClass('current').css({opacity:1});
			article = $('article:visible');
			$.scrollTo(scrolltop + 1, {axis:'y'});
			// $.scrollTo(scrolltop, {axis:'y'});
		}
		e.preventDefault();
	});


	$('.video a').click(function(e){
		var that = $(this);
		var video = that.data('video');
		var width = $('img', that).width();
		var height = $('img', that).height();
		that.parent().prepend('<iframe src="http://player.vimeo.com/video/' + video + '?autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="' + width + '" height="' + height + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
		that.fadeOut(200);
		e.preventDefault();
	});

});


$.extend($.easing,
{
	ease: function (x, t, b, c, d) {
		// if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		// return -c/2 * ((t-=2)*t*t*t - 2) + b;
	}
});
