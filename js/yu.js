
$(function(){
	$(".lager-header").css("height",document.documentElement.scrollHeight+"px");
	$(".dropdown-menu li").click(function(){
		$(".input-group input").val($(this).text());
	})
	$(".input-group-btn").click(function(){
		$(".dropdown-menu").slideDown();
	})
	$("input").focus(function(){
		$(".dropdown-menu").slideUp();
	})
	$("li").click(function(){
		$(".dropdown-menu").slideUp();
	})
})
