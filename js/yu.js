
$(function(){
	$(".lager-header").css("height",document.documentElement.scrollHeight+"px");
	$(".dropdown-menu li").click(function(){
		$(".input-group input").val($(this).text());
	})
})
