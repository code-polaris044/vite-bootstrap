		//チェックボックスの全選択
		function change_check_inactive(id){
			$('[data-checkbox="' + id + '"]').removeClass("active");
			$('[data-checkbox="' + id + '"]').attr("aria-pressed","false");
		}
		function determine_check(id){
			if ($(".collapse-"+id+" input:checked").length == $(".collapse-"+id+" input").length){
				$('[data-checkbox="' + id + '"]').addClass("active");
				$('[data-checkbox="' + id + '"]').attr("aria-pressed","true");
			}else{
				change_check_inactive(id);
			}
		}
		$(function() {
			$('button[data-checkbox]').click( function(e) {
				var id = $(this).attr('data-checkbox');
				if($(".collapse-"+id+" input").prop("checked")){
					determine_check(id);
					if ($(".collapse-"+id+" input:checked").length == $(".collapse-"+id+" input").length){
						$(".collapse-"+id+" input").prop("checked", false);
					}else{
						$(".collapse-"+id+" input").prop("checked", true);
					}
				}else{
					$(".collapse-"+id+" input").prop("checked", true);
					change_check_inactive(id);
				}
			});

			$('input').on('click', function(e) {
				var id = $(this).attr('id').replace(/_[0-9]*$/g, '');
				determine_check(id);
			});
		});

		$(window).load(function () {
			$('button[data-checkbox]').each(function() {
				var id = $(this).attr('data-checkbox');
				determine_check(id);
			});
		});

		//行をダブルクリックでリンク
		$(function($) {
			$('tr[data-href]').addClass('clickable')
				.dblclick(function(e) {
					if(!$(e.target).is('a') && !$(e.target).is('.btn-group') && !$(e.target).is('span') && !$(e.target).is('button') && !$(e.target).is('select')){
						window.location = $(e.target).closest('tr').data('href');
					}
				});
		});