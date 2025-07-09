// 下記functionはブラウザバック対策。Edgeで着火しないが、ブラウザバック問題はSafariで発生しているので主にSafari用
window.onpageshow = function(event) {
	if (event.persisted) {
		$('button[type="submit"]').prop('disabled', false);
	}
};
$(function(){
	$('form').submit(function() {
		var target = $(this).find('[type="submit"]');
		setTimeout(function(){
			target.attr('disabled', true);
		},1,target);

	});
});