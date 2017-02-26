function loadHtml(url,target) {
	$.ajax({
		url:url,
		async:false,
		success:function (data){
			$("."+target).html(data);
		}
	})
}