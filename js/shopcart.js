$(function(){$.ajax({url:"../data/shop_banner.json",type:"get",dataType:"json",success:function(e){var c="";$.each(e.camera,function(e,t){c+='<div class="l_productinfo"><div class="l_pdctbox"><a href="'+t.portal+'" target="_blank"><span class="l_pdctimg"><img src="'+t.imgurl+'"></span><span class="l_pdctname">'+t.title+'</span><span class="l_pdctprice">'+t.price+"</span></a></div></div>"}),$(".l_beswiper").append(c);var r="",l=0,n=0;if(JSON.parse(localStorage.getItem("items"))){$(".l_cart-title").css("display","block"),$(".l_items").css("display","block"),$(".cart-empty").css("display","none");var t=JSON.parse(localStorage.getItem("items")).infos;$.each(e.camera,function(e,a){$.each(t,function(e,t){if(t.code==a.code){l+=Number(t.number);var c=Number(t.number)*Number(a.price.substr(1));n+=c,r+='<div class="l_p-item"><div class="item"><input type="checkbox" id="proid" name="proid" value="301" checked="checked" class="prochecked"><a class="pro-picture" href="../images/shopcenter_imgs/camera_05.png"><img src="'+a.imgurl+'"></a><div class="pro-info"><span class="proname" title="'+a.title+'">'+a.title+'</span></div><div class="unit-price"> <span class="price">'+a.price+'</span></div><div class="buy-count"><button class="reduce" type="button">-</button><input type="text" value="'+t.number+'" class="count" readonly><button class="add" type="button">+</button></div><span class="unit-total">￥'+c+'</span><span class="delete-icon" code="'+t.code+'"></span></div></div>'}})})}else $(".l_cart-title").css("display","none"),$(".l_items").css("display","none"),$(".cart-empty").css("display","block");$(".l_items").prepend(r),$(".total-price").html("￥"+n),$("#choosenPro i").html(l)}});var t=1,c=3,a=$(".l_beswiper");$(".l_list").on("click",".clic",function(e){t<=2&&$(e.target).hasClass("l_left")&&($(a).animate({left:-177.6*t},1e3),t++,c--),c<=2&&$(e.target).hasClass("l_right")&&(2==c?$(a).animate({left:0},1e3):$(a).animate({left:-177.6*c},1e3),c++,t--)}),$(".l_items").on("click",".delete-icon,button,:checkbox",function(a){if("delete-icon"==$(a.target).attr("class")){var e=Number($(a.target).prev().html().substr(1)),t=Number($(".total-price").html().substr(1)),c=Number($(a.target).parent().find(".count").val()),r=Number($("#choosenPro i").html())-c,l=t-e;$(".total-price").html("￥"+l),$(a.target).parent().parent().remove(),$("#choosenPro i").html(r);var n=JSON.parse(localStorage.getItem("items")).infos;$.each(n,function(e,t){if(t.code!=$(a.target).attr("code"));else{n.splice(e,1);var c=JSON.stringify({infos:n});localStorage.setItem("items",c)}})}else if($(a.target).hasClass("prochecked"))if("checked"!=$(a.target).attr("checked"))console.log("shang"),$(".cart-foot input").removeAttr("checked"),$(".l_cart-title span input").removeAttr("checked"),$(a.target).removeAttr("checked");else if("checked"==$(a.target).attr("checked")&&"checked"==$(a.target).parent().parent().siblings().find(".prochecked").attr("checked")){var s=document.getElementsByClassName("prochecked");$(a.target).attr("checked","checked");for(var o=0;o<s.length;o++)"checked"==$(s[o]).attr("checked")?o+1==s.length&&(console.log(o),$(".cart-foot input").attr("checked","checked"),$(".l_cart-title span input").attr("checked","checked")):console.log(o)}else $(a.target).attr("checked","checked");else{var i=$(a.target).parent().children(".count").val();n=JSON.parse(localStorage.getItem("items")).infos;if($(a.target).hasClass("reduce")){if(1==i)return;i--,$(a.target).parent().children(".count").attr("value",i);var d=Number($(a.target).parent().parent().children(".unit-total").html().substr(1))-(u=Number($(a.target).parent().parent().find(".price").html().substr(1)));$(a.target).parent().parent().children(".unit-total").html("￥"+d);var p=Number($("#choosenPro i").html());p--,$("#choosenPro i").html(p);var h=Number($(".total-price").html().substr(1))-u;$(".total-price").html("￥"+h),console.log(p);var m=$(a.target).parent().parent().children(".delete-icon").attr("code");$.each(n,function(e,t){if(t.code!=m);else{var c=Number(t.number-1);t.number=c;var a=JSON.stringify({infos:n});localStorage.setItem("items",a)}})}else if($(a.target).hasClass("add")){i++,$(a.target).parent().children(".count").attr("value",i);var u;d=Number($(a.target).parent().parent().children(".unit-total").html().substr(1))+(u=Number($(a.target).parent().parent().find(".price").html().substr(1)));$(a.target).parent().parent().children(".unit-total").html("￥"+d);p=Number($("#choosenPro i").html());p++,$("#choosenPro i").html(p);h=Number($(".total-price").html().substr(1))+u;$(".total-price").html("￥"+h),console.log(p);m=$(a.target).parent().parent().children(".delete-icon").attr("code");$.each(n,function(e,t){if(t.code!=m);else{var c=Number(t.number+1);t.number=c;var a=JSON.stringify({infos:n});localStorage.setItem("items",a)}})}}}),$(".cart-foot input").bind("change",function(){"checked"==$(this).attr("checked")?($(".prochecked").attr("checked","checked"),$(".l_cart-title span input").attr("checked","checked")):($(".prochecked").removeAttr("checked"),$(".l_cart-title span input").removeAttr("checked"))}),$(".l_cart-title").on("change",":checkbox",function(){console.log("foot"),"checked"==$(this).attr("checked")?($(".prochecked").attr("checked","checked"),$(".cart-foot input").attr("checked","checked")):($(".prochecked").removeAttr("checked"),$(".cart-foot input").removeAttr("checked"))}),$("#deleteAll").bind("click",function(){if("checked"==$(".cart-foot input").attr("checked"))localStorage.removeItem("items"),$(".l_cart-title").css("display","none"),$(".l_items").css("display","none"),$(".cart-empty").css("display","block");else{$(".l_items").children(".l_p-item").find("input[checked=checked]").parent().parent().remove();for(var e=document.getElementsByClassName("l_p-item"),t=0,c=0,a=[],r={},l=0,n=0;n<e.length;n++)t+=Number($($(e)[n]).find(".count").val()),c+=Number($($(e)[n]).find(".unit-total").html().substr(1)),l=$($(e)[n]).find(".delete-icon").attr("code"),console.log(l),r.code=l,r.number=Number($($(e)[n]).find(".count").val()),a.push(r),r={};var s=JSON.stringify({infos:a});console.log("here"),localStorage.setItem("items",s),$("#totalPrice").html("￥"+c),$("#choosenPro i").html(t)}})});