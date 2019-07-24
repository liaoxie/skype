
$.ajax({
    type: "get",
    url: "data/z_signUp.json",
    async: !0,
    success: function(data) {
        for(var s = "", t = 0; t < data.length; t++) {
            var i = data[t];
            s += "<li>" + i.country +"<i>"+ i.code +"</i>"+ "</li>"
            
        }
        $(".city-switch").html(s)
        var list = $(".city-switch").children().children();
        console.log(list);
        list.on("click",function(){
            console.log($(this).children(i));
            $("option").html($(this).text())
            $('.city-switch').css("display","none")
        })
    },
})

$(".set").on("click",function(){
    $(".city-switch").toggle();
})

$(".next").on("click",function(){
    var gr_tel = $('.txt').val();
    var re = /^1\d{10}$/; 
    console.log(re.test(gr_tel))
    console.log(gr_tel)
    if (!re.test(gr_tel)) {
        $(".tel").css("display","block")
   }else{
       $(".tel").css("display","none")
       window.location.href = "login.html"
   }
  
})
 
var c = !1;
	$(".sub").bind({
		focus: function() {
			$(".paswrd").html("密码长度6~18位,只能包含数字和大小写字母"), $(".paswrd").css({
				display: "block",
				color: "blue"
			})
		},
		blur: function() {
			c = /^[1-9A-Za-z][0-9A-Za-z]{5,17}$/.test($(this).val()) ? ($(".paswrd").html(""), $(this).css("border-bottom", "1px solid #666"), !0) : ($(".z_notice2").html("密码不合法，请重新输入"), $(".z_notice2").css({
				display: "block",
				color: "red"
			}), $(this).css("border-bottom", "1px solid red"), !1), console.log(c)
		}
    })
    var l = !1;
	$(".name").blur(function() {
		l = /^[\u4e00-\u9fa5]{1,4}$/.test($(this).val()) ? ($(".lastName").html(""),$(".lastName").css("display","none"), $(this).css("border-bottom", "1px solid #666"), !0) : ($(".lastName").html("姓氏不合法，请重新输入"),$(".lastName").css("display","block"), $(this).css("border-bottom", "1px solid red"), !1), console.log(l)
	});