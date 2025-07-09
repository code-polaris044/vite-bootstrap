/*!
	Autosize 3.0.14
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);c=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),f="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(f)&&(f=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,c=t,u&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+f;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==c&&n("visible"):"hidden"!==c&&n("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var d=void 0===arguments[1]?{}:arguments[1],s=d.setOverflowX,l=void 0===s?!0:s,a=d.setOverflowY,u=void 0===a?!0:a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var f=null,c=null,v=e.clientWidth,p=function(){e.clientWidth!==v&&i()},h=function(t){window.removeEventListener("resize",p,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",h,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",h,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",p,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(d=function(e){return e},d.destroy=function(e){return e},d.update=function(e){return e}):(d=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},d.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=d});

//テキストエリアの自動調整
$(window).load(function(){
	autosize($('textarea'));
	$('button').click(function(e){
		autosize($('textarea'));
	});
});

//jquery.zip2addr.min.js
$.fn.zip2addr=function(e){var a={api:location.protocol+"//www.google.com/transliterate?langpair=ja-Hira|ja&jsonp=?",prefectureToken:"(東京都|道|府|県)",zipDelimiter:"-"},r=$.fn.zip2addr.cache,c=function(e,r){$.getJSON(a.api,{text:e},function(e){RegExp(a.prefectureToken).test(e[0][1][0])&&r(e[0][1][0].replace(RegExp("(.*?"+a.prefectureToken+")(.+)"),function(e,a,r,c){return[a,c]}))})},n=function(){return"object"==typeof e&&e.pref?function(a){var r=a.split(",");if(r){if(!RegExp(r[1]).test($(e.addr).val())){var c;switch(r[0]){case"北海道":c=1;break;case"青森県":c=2;break;case"岩手県":c=3;break;case"宮城県":c=4;break;case"秋田県":c=5;break;case"山形県":c=6;break;case"福島県":c=7;break;case"茨城県":c=8;break;case"栃木県":c=9;break;case"群馬県":c=10;break;case"埼玉県":c=11;break;case"千葉県":c=12;break;case"東京都":c=13;break;case"神奈川県":c=14;break;case"新潟県":c=15;break;case"富山県":c=16;break;case"石川県":c=17;break;case"福井県":c=18;break;case"山梨県":c=19;break;case"長野県":c=20;break;case"岐阜県":c=21;break;case"静岡県":c=22;break;case"愛知県":c=23;break;case"三重県":c=24;break;case"滋賀県":c=25;break;case"京都府":c=26;break;case"大阪府":c=27;break;case"兵庫県":c=28;break;case"奈良県":c=29;break;case"和歌山県":c=30;break;case"鳥取県":c=31;break;case"島根県":c=32;break;case"岡山県":c=33;break;case"広島県":c=34;break;case"山口県":c=35;break;case"徳島県":c=36;break;case"香川県":c=37;break;case"愛媛県":c=38;break;case"高知県":c=39;break;case"福岡県":c=40;break;case"佐賀県":c=41;break;case"長崎県":c=42;break;case"熊本県":c=43;break;case"大分県":c=44;break;case"宮崎県":c=45;break;case"鹿児島県":c=46;break;case"沖縄県":c=47;break;default:c=0}$(e.pref).val(c).change();var n=r[1].match(/((?:四日市|廿日市|野々市|かすみがうら|つくばみらい|いちき串木野)市|(?:杵島郡大町|余市郡余市|高市郡高取)町|.{1,4}市.{1,4}区|.{1,3}区|.{1,5}市(?=.*市)|.{1,5}市|.{2,9}町(?=.*町)|.{2,9}町|.{3,8}村(?=.*村)|.{3,8}村)(.*)/);$(e.addr).val(n[1]).change(),$(e.addr2).val(n[2]).change()}}else RegExp(r[1]).test($(e.addr).val())||$(e.pref).add(e.addr).val("").change()}:function(a){var r=a.replace(",",""),c=e.addr||e;r?RegExp(r).test($(c).val())||$(c).val(r).change():RegExp(r).test($(c).val())||$(c).val("").change()}}(),t=function(){var e=/[\uFF01-\uFF5E]/g,a=function(e){return String.fromCharCode(e.charCodeAt()-65248)};return function(r){return r.replace(e,a)}}(),s=function(e){var a=t(e).replace(/\D/g,"");7==a.length&&(void 0==r[a]?c(a.replace(/(\d\d\d)(\d\d\d\d)/,"$1-$2"),function(e){r[a]=e,n(e)}):n(r[a]))};return this.each(function(){var r=$(this);"object"==typeof e&&e.zip2?r.add($(e.zip2)).bind("keyup.zip2addr change.zip2addr",function(){s(r.val()+""+$(e.zip2).val())}).bind("blur.zip2addr",function(){$(this).val(function(){return t($(this).val())}).change()}):r.bind("keyup.zip2addr change.zip2addr",function(){s(r.val())}).bind("blur.zip2addr",function(){$(this).val(function(){return t($(this).val()).replace(/\D/g,"").replace(/(\d\d\d)(\d\d\d\d)/,"$1"+a.zipDelimiter+"$2")}).change()})}),this},$.fn.zip2addr.cache={};

//グループマスターを使用しているページは、チェックが入っていれば、Collapseをを開く。
$(function(){
	$(window).load(function(){
		$('.group-master div[id^="collapse"]').each(function() {
			var id = '#' + $(this).attr('id');
			$(id+' input:checked').each(function() {
				$(id).addClass('in');
			});
		});
	});
});

//Ctrl+sで保存する。
//そのうち確認アラートを表示する
$(function($){
	$(window).keydown(function(e){
		if(event.ctrlKey){
			if(e.keyCode === 83){
				$('[type="submit"]').trigger('click');
				return false;
			}
		}
	});
});

//文字数をカウントする
$( document ).on( "keydown keypress keyup change", "input,textarea", function(e) {
	var id = e.currentTarget.id;
	if(id != null){
		var input_name = id.replace(/^form_/g, '');
		var max_length = $('#box_length_'+input_name).text();
		if(max_length != null && max_length != ''){
			max_length = max_length.replace(/.+\/([0-9]+)文字以内$/g, '$1');
			var input_length = $(this).val().length;
			if(max_length < input_length){
				$('#box_length_'+input_name).addClass('dangerText');
				$('#'+id).addClass('dangerInput');
			}else{
				$('#box_length_'+input_name).removeClass('dangerText');
				$('#'+id).removeClass('dangerInput');
			}
			$('#length_'+input_name).text(input_length);
		}
	}
});

//画面が読み込まれたとき、文字数をカウントする
$(function(){
	$(window).load(function(){
		$('input,textarea').each(function(){
			var id = $(this).attr('id');
			if(id != null){
				var input_name = id.replace(/^form_/g, '');
				var input_length = $(this).val().length;
				$('#length_'+input_name).text(input_length);
			}
		});
	});
});

//チェックボックスの全選択
$(function() {
	$('input[data-checkbox]').click( function(e) {
		var id = $(this).attr('data-checkbox');
		if($(this).prop("checked") == false){
			$("#"+id+" input").prop("checked", false);
		}else{
			$("#"+id+" input").prop("checked", true);
		}
	});
});