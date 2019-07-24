$(function() {
	$(".z_account").blur(function() {
		/^1[3-9]\d{9}$/.test($(this).val()) || /^[1-9a-zA-Z]\w{5,19}@\w{2,10}(\.[a-zA-Z]{2,4}){1,}$/.test($(this).val()) ? ($(".z_notice1").html(""), $(this).css("border-bottom", "1px solid #666")) : ($(".z_notice1").html("用户名不合法，请重新输入！"), $(".z_notice1").css("display", "block"), $(this).css("border-bottom", "1px solid red"))
	}), $(".z_password").blur(function() {
		/^[1-9A-Za-z][0-9A-Za-z]{5,17}$/.test($(this).val()) ? ($(".z_notice2").html(""), $(this).css("border-bottom", "1px solid #666"), pFlag = !0) : ($(".z_notice2").html("密码不合法，请重新输入！"), $(this).css("border-bottom", "1px solid red"))
	});
	var e = $(".z_logstatus");
	$(".z_log").click(function() {
		var t = $(".z_account").val(),
			o = $(".z_password").val();
		"15767662531" == t && "123456" == o ? (e.attr("checked") ? (setCookie("username", t, 30), setCookie("userpass", o, 30), setCookie("select", "on", 30)) : setCookie("select", "off", 30), $(".z_notice3").html(""), window.location.href = "gmw.html") : $(".z_notice3").html("用户名或密码错误，请重试！")
	}), "on" == getCookie("select") ? (e.attr("checked", "checked"), getCookie("username") && $(".z_account").val(getCookie("username")), getCookie("userpass") && $(".z_password").val(getCookie("userpass"))) : e.attr("checked", ""), $(".z_create").click(function() {
		window.location.href = "signup.html"
	})
});