$(function(){var l=document.getElementsByClassName("l_beswiper");console.log(l),$.ajax({url:"../data/shop_banner.json",type:"get",dataType:"json",success:function(a){var s="";$.each(a.banner,function(a,l){s+='<div class="l_slider"><a href="'+l.portal+'"><img src="'+l.imgurl+'"></a><h3 class="l_slidern">'+l.title+"</h3></div>"}),$(".l_swiper-wrapper").append(s),$.each(a.topitem,function(a,l){s='<a href="'+l.portal+'" target="_blank"><span class="l_imgwrap"><img src="'+l.imgurl+'"></span><span class="l_pdct">'+l.title+'</span><span class="l_info">'+l.info+'</span><span class="l_price">售价： <i>'+l.price+'</i></span><span class="l_buy">立刻购买</span></a>',$(".l_topproduct").append(s)});var e=" ";$.each(a.meeting,function(a,l){e+='<div class="l_productinfo"><div class="l_pdctbox"><a href="'+l.portal+'" target="_blank"><span class="l_pdctimg"><img src="'+l.imgurl+'"></span><span class="l_pdctname">'+l.title+'</span><span class="l_pdctprice">'+l.price+"</span></a></div></div>"}),$($(l)[0]).append(e);var t="";$.each(a.camera,function(a,l){console.log(l.code),t+='<div class="l_productinfo" code="'+l.code+'"><div class="l_pdctbox"><a href="'+l.portal+'" target="_blank"><span class="l_pdctimg"><img src="'+l.imgurl+'"></span><span class="l_pdctname">'+l.title+'</span><span class="l_pdctprice">'+l.price+"</span></a></div></div>"}),$($(l)[1]).append(t);var n=" ";$.each(a.mic,function(a,l){n+='<div class="l_productinfo"><div class="l_pdctbox"><a href="'+l.portal+'" target="_blank"><span class="l_pdctimg"><img src="'+l.imgurl+'"></span><span class="l_pdctname">'+l.title+'</span><span class="l_pdctprice">'+l.price+"</span></a></div></div>"}),$($(l)[2]).append(n);var c="";$.each(a.speaker,function(a,l){c+='<div class="l_productinfo"><div class="l_pdctbox"><a href="'+l.portal+'" target="_blank"><span class="l_pdctimg"><img src="'+l.imgurl+'"></span><span class="l_pdctname">'+l.title+'</span><span class="l_pdctprice">'+l.price+"</span></a></div></div>"}),$($(l)[3]).append(c)}}),$(".l_select .icon-down_s").bind("click",function(){$(this).toggleClass("open"),$(".l_option").toggleClass("show")}),$(".l_select ul").on("click","li",function(){console.log($(this).html()),$(".l_select span").html($(this).html()),$(".l_option").removeClass("show"),$(".l_select .icon-down_s").removeClass("open")});var s=0,e=document.querySelector(".l_swiper-wrapper");function t(){if($(".l_changebar").children().removeClass("active color"),0==s)var a=$(".l_changebar").children()[1];else a=$(".l_changebar").children()[s-1];$(a).addClass("active"),2==s?(e.style.left="0px",s=1):s++,$(".l_swiper-wrapper").animate({left:-696*s})}var a=setInterval(t,3e3);$(".l_playimg").bind("mouseenter",function(){clearInterval(a)}),$(".l_playimg").bind("mouseleave",function(){a=setInterval(t,3e3)}),$(".l_changebar").on("click","span",function(){$(this).siblings().removeClass("active"),$(this).addClass("active");for(var a=0;a<2;a++)$(this).hasClass("active")==$(".l_changebar span").eq(a).hasClass("active")&&(console.log(a),0==a&&2!=s?($(".l_swiper-wrapper").animate({left:0}),s=0):1==a&&1!=s&&t())});var n=1,c=3,i=$(".l_beswiper")[1],p=$(".l_beswiper")[2];if($($(".l_list")[1]).on("click",".clic",function(a){n<=2&&$(a.target).hasClass("l_left")&&($(i).animate({left:-177.6*n},1e3),n++,c--),c<=2&&$(a.target).hasClass("l_right")&&(2==c?$(i).animate({left:0},1e3):$(i).animate({left:-177.6*c},1e3),c++,n--)}),$($(".l_list")[2]).on("click",".clic",function(a){$(a.target).hasClass("l_left")&&$(p).animate({left:-177},1e3),$(a.target).hasClass("l_right")&&$(p).animate({left:0},1e3)}),localStorage.getItem("items")){var r=JSON.parse(localStorage.getItem("items")).infos,o=0;$.each(r,function(a,l){o+=Number(l.number)}),console.log(o),$(".l_search a em").html(o)}});