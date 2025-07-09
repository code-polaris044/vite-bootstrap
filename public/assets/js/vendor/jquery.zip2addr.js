/*!
 * jQuery.zip2addr
 *
 * Copyright 2010, Kotaro Kokubo a.k.a kotarok kotaro@nodot.jp
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * https://github.com/kotarok/jQuery.zip2addr
 *
 * Depends:
 *	jQuery 1.4 or above
 */

$.fn.zip2addr = function(target){
	var c = {
		api: location.protocol + '//www.google.com/transliterate?langpair=ja-Hira|ja&jsonp=?',
		prefectureToken: '(東京都|道|府|県)',
		zipDelimiter: '-'
	}

	var cache = $.fn.zip2addr.cache;

	var getAddr = function(zip,callback){
		$.getJSON(c.api,{'text':zip},
			function(json){
				if(RegExp(c.prefectureToken).test(json[0][1][0])){
					callback(json[0][1][0].replace(RegExp('(.*?'+c.prefectureToken+')(.+)'),function(a,b,c,d){return [b,d]}))
				}
			}
		)
	}

	var fillAddr = (function(){
		if(typeof target == 'object' && target.pref){
			return function(addr){
				var addrs = addr.split(',');
				if(addrs){
					if(!RegExp(addrs[1]).test($(target.addr).val())){
						// valueが指定してあると動作しないのでカスタマイズ
						// $(target.pref).val(addrs[0]);
						var prefID;
						switch(addrs[0]){
							case '北海道': prefID = 1; break;
							case '青森県': prefID = 2; break;
							case '岩手県': prefID = 3; break;
							case '宮城県': prefID = 4; break;
							case '秋田県': prefID = 5; break;
							case '山形県': prefID = 6; break;
							case '福島県': prefID = 7; break;
							case '茨城県': prefID = 8; break;
							case '栃木県': prefID = 9; break;
							case '群馬県': prefID = 10; break;
							case '埼玉県': prefID = 11; break;
							case '千葉県': prefID = 12; break;
							case '東京都': prefID = 13; break;
							case '神奈川県': prefID = 14; break;
							case '新潟県': prefID = 15; break;
							case '富山県': prefID = 16; break;
							case '石川県': prefID = 17; break;
							case '福井県': prefID = 18; break;
							case '山梨県': prefID = 19; break;
							case '長野県': prefID = 20; break;
							case '岐阜県': prefID = 21; break;
							case '静岡県': prefID = 22; break;
							case '愛知県': prefID = 23; break;
							case '三重県': prefID = 24; break;
							case '滋賀県': prefID = 25; break;
							case '京都府': prefID = 26; break;
							case '大阪府': prefID = 27; break;
							case '兵庫県': prefID = 28; break;
							case '奈良県': prefID = 29; break;
							case '和歌山県': prefID = 30; break;
							case '鳥取県': prefID = 31; break;
							case '島根県': prefID = 32; break;
							case '岡山県': prefID = 33; break;
							case '広島県': prefID = 34; break;
							case '山口県': prefID = 35; break;
							case '徳島県': prefID = 36; break;
							case '香川県': prefID = 37; break;
							case '愛媛県': prefID = 38; break;
							case '高知県': prefID = 39; break;
							case '福岡県': prefID = 40; break;
							case '佐賀県': prefID = 41; break;
							case '長崎県': prefID = 42; break;
							case '熊本県': prefID = 43; break;
							case '大分県': prefID = 44; break;
							case '宮崎県': prefID = 45; break;
							case '鹿児島県': prefID = 46; break;
							case '沖縄県': prefID = 47; break;
							default: prefID = 0; break;
						}
						$(target.pref).val(prefID);
//						$(target.addr).val(addrs[1]);
						var ad = addrs[1].match(/((?:四日市|廿日市|野々市|かすみがうら|つくばみらい|いちき串木野)市|(?:杵島郡大町|余市郡余市|高市郡高取)町|.{1,4}市.{1,4}区|.{1,3}区|.{1,5}市(?=.*市)|.{1,5}市|.{2,9}町(?=.*町)|.{2,9}町|.{3,8}村(?=.*村)|.{3,8}村)(.*)/);
						$(target.addr).val(ad[1]);
						$(target.addr2).val(ad[2]);
					}
				}else if(!RegExp(addrs[1]).test($(target.addr).val())){
					$(target.pref).add(target.addr).val('');
				}
			}
		}else{
			return function(addr){
				var addrStr = addr.replace(',','');
				var addrField = target.addr || target;
				if(addrStr){
					if(!RegExp(addrStr).test($(addrField).val())){
						$(addrField).val(addrStr);
					}
				}else if(!RegExp(addrStr).test($(addrField).val())){
					$(addrField).val('');
				}
			}
		}
	})()

	//From http://liosk.blog103.fc2.com/blog-entry-72.html
	var fascii2ascii = (function() {
		var pattern = /[\uFF01-\uFF5E]/g, replace = function(m) {
			return String.fromCharCode(m.charCodeAt() - 0xFEE0);
		};
		return function(s){return s.replace(pattern, replace);};
	})();

	var check = function(_val){
		var val = fascii2ascii(_val).replace(/\D/g,'');
		if(val.length == 7){
			if(cache[val] == undefined){
				getAddr(val.replace(/(\d\d\d)(\d\d\d\d)/,'$1-$2'),function(json){
					cache[val] = json;
					fillAddr(json);
				})
			}else{
				fillAddr(cache[val]);
			}
		}
	}

	this.each(function(){
		var elem = $(this);
		if(typeof target == 'object' && target.zip2){
			elem.add($(target.zip2))
				.bind('keyup.zip2addr change.zip2addr',function(){
					check(elem.val()+''+$(target.zip2).val())
				})
				.bind('blur.zip2addr',function(){
					$(this).val(function(){
						return fascii2ascii($(this).val())
					})
				})
		}else{
			elem
				.bind('keyup.zip2addr change.zip2addr',function(){
					check(elem.val())
				})
				.bind('blur.zip2addr',function(){
					$(this).val(function(){
						return fascii2ascii($(this).val()).replace(/\D/g,'').replace(/(\d\d\d)(\d\d\d\d)/,'$1'+c.zipDelimiter+'$2')
					})
				})
		}
	});

	return this;
};

$.fn.zip2addr.cache = {};