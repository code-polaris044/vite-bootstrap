$(document).ready(function(){

	// GoogleMapの枠作成（#jobMap）
	$('#jobMap').each(function(){
		$(this).prepend('<div id="gmap"></div>');
	});

	// GoogleMapを表示（#jobMap）
	$('#gmap').each(function(){
		var mapStr = $(this).parent().find('.btn').attr('href');	// 地図のURL取得
		var mapID = 'gmap';
		if(mapStr != undefined){
			var mapName = mapStr.match(/loc:(.*),(.*)\((.*)\)\&z=(.*)/);
			mapName = RegExp.$3;	// 地図の名称
			var x = RegExp.$1;	// 緯度
			var y = RegExp.$2;	// 経度
			var z = RegExp.$4;
			z = parseInt(z);	// ズームレベル

			// マップ作成
			var latlng = new google.maps.LatLng(x, y);
			var myOptions = {
				zoom: z,
				center: latlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(mapID), myOptions);

			// マーカー
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: mapName
			});
		}
	});

	// GoogleMapの枠作成（#jobMap_entry）
	$('#jobMap_entry').each(function(){
		$(this).prepend('<div id="gmap_entry"></div>');
	});

	// GoogleMapを表示（#jobMap_entry）
	$('#gmap_entry').each(function(){
		var mapStr = $(this).parent().find('.btn').attr('href');	// 地図のURL取得
		var mapID = 'gmap_entry';
		if(mapStr != undefined){
			var mapName = mapStr.match(/loc:(.*),(.*)\((.*)\)\&z=(.*)/);
			mapName = RegExp.$3;	// 地図の名称
			var x = RegExp.$1;	// 緯度
			var y = RegExp.$2;	// 経度
			var z = RegExp.$4;
			z = parseInt(z);	// ズームレベル

			// マップ作成
			var latlng = new google.maps.LatLng(x, y);
			var myOptions = {
				zoom: z,
				center: latlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(mapID), myOptions);

			// マーカー
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: mapName
			});
		}
	});

});
