$(document).ready(function() {
	var videoUrls = [
		'https://www.youtube.com/embed/mzYM9QKKWSg',
		'https://www.youtube.com/embed/8zsYZFvKniw',
		'https://www.youtube.com/embed/d9IxdwEFk1c',
		'https://www.youtube.com/embed/42Gtm4-Ax2U',
		'https://www.youtube.com/embed/NJR8Inf77Ac'
	];

	$('.list-group-item').each(function(idx) {
		$(this).click(function() {
			$('.video-frame').attr('src', videoUrls[idx]);
		});
	});
});

