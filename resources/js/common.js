$(function () {
	// for文用の変数iを宣言
	var i;

	/*
	// Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-xxxxxxxx-x', 'auto');
	ga('send', 'pageview');

	// Analytics：外部リンクなどのイベントトラッキング
	$('a[href*="//"], a[href^="mailto"], a[href$="pdf"]').click(function(){
		var category = location.pathname + location.search + location.hash;
		var label = $(this).attr('href');
		if(label.indexOf('mailto') >= 0){
			if(label.match(/\@(.*)/)){
				var action = RegExp.$1;
			}
			ga('send', 'event', category, action + 'へのメール', label);
		}else if(label.indexOf('.zip') >= 0){
			ga('send', 'event', category, 'ZIPダウンロード', label);
		}else{
			if(label.match(/\/\/(.*?)[\/\"]/)){
				var action = RegExp.$1;
			}
			ga('send', 'event', category, action + 'へのリンク', label);
		}
	});
*/

	// 外部サイトなどをtarget="_blank"で表示
	$('a[href*="//"], form[action*="//"], a[href$="pdf"]').attr("target", "_blank");

	// スムーススクロール
	$('a[href^="#"]')
		.not(".carousel a")
		.not(".pagination a")
		.not("#header-nav a")
		.not(".nav-tabs a")
		.not('[data-toggle="collapse"]')
		.not('[href="#jobMap"]')
		.not('[href="#jobMap_entry"]')
		.click(function () {
			// スクロールの速度
			var speed = 400;
			// アンカー取得
			var href = $(this).attr("href");
			// 移動先を取得
			var target = $(href == "#" || href == "" ? "body, html" : href);
			var position = target.offset().top;
			// スムーススクロール
			$("body, html").animate({ scrollTop: position }, speed, "swing");
			return false;
		});

	// スマホの場合、電話クリックで発信
	if (
		(navigator.userAgent.indexOf("iPhone") >= 0 && navigator.userAgent.indexOf("iPad") == -1) ||
		navigator.userAgent.indexOf("iPod") >= 0 ||
		navigator.userAgent.indexOf("Android") >= 0
	) {
		var telNumber;
		var telClass = $(".tel");
		var telClassLength = telClass.length;
		for (i = telClassLength; i--; ) {
			telNumber = telClass.eq(i).html();
			if (telNumber.match(/(\d+-\d+-\d+)/)) {
				telClass.eq(i).wrapInner('<a href="tel:' + RegExp.$1 + '"></a>');
			}
		}
	}
});

function nav(sel) {
	if (sel.selectedIndex == -1) return;
	var opt = sel.options[sel.selectedIndex];
	if (opt && opt.value) location.href = opt.value;
}
