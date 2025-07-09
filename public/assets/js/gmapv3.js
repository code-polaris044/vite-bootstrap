
var jmElementMapX = new Object();
var jmElementMapY = new Object();
var jmElementMapZ = new Object();
var jmMap = new Object();
var jmMarker = new Object();

function mapInitialize(idMap, valueMapX, valueMapY, valueMapZ) {
	// 値設定
	var numX = Number(valueMapX);
	var numY = Number(valueMapY);
	var numZ = Number(valueMapZ);

	var latlng = new google.maps.LatLng(numY, numX);

	// マップ作成
	var myOptions = {
		zoom: numZ,
		center: latlng,
		scrollwheel: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		rotateControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	jmMap[idMap] = new google.maps.Map(document.getElementById(idMap), myOptions);

	// マーカー作成
	jmMarker[idMap] = new google.maps.Marker({
		map: jmMap[idMap],
		position: latlng,
		draggable: false,
		title: "マーカー"
	});
	jmMarker[idMap].setMap(jmMap[idMap]);
}

function mapInitializePicker(idMap) {
	// 値設定
	jmElementMapX[idMap] = document.getElementById(idMap + '_x');
	jmElementMapY[idMap] = document.getElementById(idMap + '_y');
	jmElementMapZ[idMap] = document.getElementById(idMap + '_z');
	var numX = Number(jmElementMapX[idMap].value);
	var numY = Number(jmElementMapY[idMap].value);
	var numZ = Number(jmElementMapZ[idMap].value);

	var latlng = new google.maps.LatLng(numY, numX);

	// マップ作成
	var myOptions = {
		zoom: numZ,
		center: latlng,
		scrollwheel: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	jmMap[idMap] = new google.maps.Map(document.getElementById(idMap), myOptions);

	// マーカー作成
	jmMarker[idMap] = new google.maps.Marker({
		map: jmMap[idMap],
		position: latlng,
		draggable: true,
		title: 'Marker'
	});

	google.maps.event.addListener(jmMap[idMap], 'click', function(event) {
		mapPickerPoint(event.latLng, idMap);
	});
	google.maps.event.addListener(jmMap[idMap], 'zoom_changed', function() {
		jmElementMapZ[idMap].value = jmMap[idMap].getZoom();
	});

	google.maps.event.addListener(jmMarker[idMap], 'dragend', function() {
		mapPickerPoint(jmMarker[idMap].position, idMap);
	});
	jmMarker[idMap].setMap(jmMap[idMap]);
}

function mapPickerAddress(idAddressPrefix, idMap) {
	var valueAddress = document.getElementById(idAddressPrefix+'city').value;
	valueAddress += document.getElementById(idAddressPrefix+'town').value;
	valueAddress += document.getElementById(idAddressPrefix+'street').value;

	var objGeocoder = new google.maps.Geocoder();
	objGeocoder.geocode({
		address: valueAddress
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var bounds = new google.maps.LatLngBounds();
			for (var i in results) {
				if (results[i].geometry) {
					var latlng = results[i].geometry.location;
					mapPickerPoint(latlng, idMap);
					bounds.extend(latlng);
				}
			}
		}
	});
}

function mapPickerPoint(objPoint, idMap) {
	jmElementMapX[idMap].value = objPoint.lng();
	jmElementMapY[idMap].value = objPoint.lat();
	jmMarker[idMap].setPosition( objPoint ) ;
	jmMarker[idMap].setMap(jmMap[idMap]);
	jmMap[idMap].panTo(objPoint);
}