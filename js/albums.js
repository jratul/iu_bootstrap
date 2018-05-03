$(document).ready(function() {
	var titles = [
		'꽃갈피 둘',
		'Palette',
		'사랑이 잘',
		'밤편지',
		'CHAT-SHIRE',
		'Modern Times - Epilogue'
	];

	var songs = [
		['가을 아침', '비밀의 화원', '잠 못 드는 밤 비는 내리고', '어젯밤 이야기','개여울','매일 그대와'],
		['이 지금', '팔레트', '이런 엔딩', '사랑이 잘', '잼잼', 'Black Out', '마침표', '밤편지', '그렇게 사랑은', '이름에게'],
		['사랑이 잘'],
		['밤편지'],
		['새 신발', 'Zeze', '스물셋', '푸르던', 'Red Queen', '무릎', '안경'],
		['금요일에 만나요', '크레파스', '을의 연애', '누구나 비밀은 있다', '입술 사이', '분홍신', 'Modern Times', '싫은 날','Obliviate','아이야 나랑 걷자', 'Havana', '우울시계', '한낮의 꿈', '기다려', 'Voice Mail']
	];

	var albumUrl = [
		'http://www.melon.com/album/detail.htm?albumId=10096855',
		'http://www.melon.com/album/detail.htm?albumId=10056666',
		'http://www.melon.com/album/detail.htm?albumId=10052968',
		'http://www.melon.com/album/detail.htm?albumId=10047890',
		'http://www.melon.com/album/detail.htm?albumId=2646282',
		'http://www.melon.com/album/detail.htm?albumId=2222587'
	];

	$('.btn-playlist').each(function(idx) {
		$(this).click(function() {
			$('.modal-title').text(titles[idx]);

			var list = $('<ul>');
			songs[idx].forEach(function(item) {
				var li = $('<li>');
				li.text(item);
				li.appendTo(list);
			});
			$('.modal-playlist').empty();
			list.appendTo($('.modal-playlist'));

			$('#listModal').modal('show');
		});
	});

	$('.btn-melon').each(function(idx) {
		$(this).attr('href', albumUrl[idx]);
	});
});
