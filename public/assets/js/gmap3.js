$(document).ready(function(){

	// GoogleMap�̘g�쐬�i#jobMap�j
	$('#jobMap').each(function(){
		$(this).prepend('<div id="gmap"></div>');
	});

	// GoogleMap��\���i#jobMap�j
	$('#gmap').each(function(){
		var mapStr = $(this).parent().find('.btn').attr('href');	// �n�}��URL�擾
		var mapID = 'gmap';
		if(mapStr != undefined){
			var mapName = mapStr.match(/loc:(.*),(.*)\((.*)\)\&z=(.*)/);
			mapName = RegExp.$3;	// �n�}�̖���
			var x = RegExp.$1;	// �ܓx
			var y = RegExp.$2;	// �o�x
			var z = RegExp.$4;
			z = parseInt(z);	// �Y�[�����x��

			// �}�b�v�쐬
			var latlng = new google.maps.LatLng(x, y);
			var myOptions = {
				zoom: z,
				center: latlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(mapID), myOptions);

			// �}�[�J�[
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: mapName
			});
		}
	});

	// GoogleMap�̘g�쐬�i#jobMap_entry�j
	$('#jobMap_entry').each(function(){
		$(this).prepend('<div id="gmap_entry"></div>');
	});

	// GoogleMap��\���i#jobMap_entry�j
	$('#gmap_entry').each(function(){
		var mapStr = $(this).parent().find('.btn').attr('href');	// �n�}��URL�擾
		var mapID = 'gmap_entry';
		if(mapStr != undefined){
			var mapName = mapStr.match(/loc:(.*),(.*)\((.*)\)\&z=(.*)/);
			mapName = RegExp.$3;	// �n�}�̖���
			var x = RegExp.$1;	// �ܓx
			var y = RegExp.$2;	// �o�x
			var z = RegExp.$4;
			z = parseInt(z);	// �Y�[�����x��

			// �}�b�v�쐬
			var latlng = new google.maps.LatLng(x, y);
			var myOptions = {
				zoom: z,
				center: latlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(mapID), myOptions);

			// �}�[�J�[
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: mapName
			});
		}
	});

});
