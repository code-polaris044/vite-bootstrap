
// 初期位置（つくば駅）
var map_y = 36.082148;
var map_x = 140.10997;

// 初期値でマップを表示する
function init_map(latitude_id, longitude_id, map_id) 
{

	// 初期位置
	document.getElementById(latitude_id).value = map_y;
	document.getElementById(longitude_id).value = map_x;
	var init_position = new google.maps.LatLng(map_y, map_x);

	// マップ表示
	var init_map = new google.maps.Map(document.getElementById(map_id), {
		center: init_position,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// ドラッグできるマーカーを表示
	var marker = new google.maps.Marker({
		position: init_position,
		title: " ",
		draggable: true	// ドラッグ可能にする
	});
	marker.setMap(init_map);

	// マーカーのドロップ（ドラッグ終了）時のイベント
	google.maps.event.addListener( marker, 'dragend', function(ev){
		// イベントの引数evの、プロパティ.latLngが緯度経度。
		document.getElementById(latitude_id).value = ev.latLng.lat();
		document.getElementById(longitude_id).value = ev.latLng.lng();
	});
}

// 指定座標でマップを表示する
function show_map(latitude_id, longitude_id, map_id, st_edit) 
{

	// 初期位置
	var y = document.getElementById(latitude_id).value;
	var x = document.getElementById(longitude_id).value;
	var init_position = new google.maps.LatLng(y, x);

	// マップ表示
	var map = new google.maps.Map(document.getElementById(map_id), {
		center: init_position,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	if (st_edit == true) {//ドラッグ可能
		// ドラッグできるマーカーを表示
		var marker = new google.maps.Marker({
			position: init_position,
			title: " ",
			draggable: true	// ドラッグ可能にする
		});
	} else {//ドラッグ不可
		// ドラッグできるマーカーを表示
		var marker = new google.maps.Marker({
			position: init_position,
			title: " ",
			draggable: false	// ドラッグ不可にする
		});
	}
	marker.setMap(map);

	// マーカーのドロップ（ドラッグ終了）時のイベント
	google.maps.event.addListener( marker, 'dragend', function(ev){
		// イベントの引数evの、プロパティ.latLngが緯度経度。
		document.getElementById(latitude_id).value = ev.latLng.lat();
		document.getElementById(longitude_id).value = ev.latLng.lng();
	});
}

// 指定した緯度・経度の元にマップを表示する
function set_map(zipcode_h, zipcode_l, latitude_id, longitude_id, map_id) 
{
	var lat;
	var lng;

	var zipcode = document.getElementById(zipcode_h).value + document.getElementById(zipcode_l).value;
	printf("zipcode: " + zipcode);
	// var postal = '3050046';

	// 郵便番号から緯度・経度を取得
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': zipcode}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            lat = location.lat();
            lng = location.lng();
        } else {
            console.log("Geocode was not successful for the following reason: " + status);
        }
    });

	// 位置設定
	var position = new google.maps.LatLng(lat, lng);

	// マップ表示
	var map = new google.maps.Map(document.getElementById(map_id), {
		center: position,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// ドラッグできるマーカーを表示
	var marker = new google.maps.Marker({
		position: position,
		title: " ",
		draggable: true	// ドラッグ可能にする
	});
	marker.setMap(map);

	// マーカーのドロップ（ドラッグ終了）時のイベント
	google.maps.event.addListener( marker, 'dragend', function(ev){
		// イベントの引数evの、プロパティ.latLngが緯度経度。
		document.getElementById(latitude_id).value = ev.latLng.lat();
		document.getElementById(longitude_id).value = ev.latLng.lng();
	});
}

