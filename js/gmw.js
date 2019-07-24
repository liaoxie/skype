// -----------------banner---------------------------//
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
   

    slidesPerView: "auto",
          // loopedSlides: _this.bannerList.length,
          speed: 300,
          autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: 2000
          },
          observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
          pagination: {
            el: ".swiper-pagination"
          }
  })    
  
  
//////弹出框
$(".z_sts").on("click",function(){
  $(".z_tan1").toggle();
})

$(".z_close1").on("click",function(){
  $(".z_tan1").hide();
})

$(".z_tel").on("click",function(){
  $(".z_tan2").toggle();
})

$(".z_close2").on("click",function(){
  $(".z_tan2").hide();
})




  