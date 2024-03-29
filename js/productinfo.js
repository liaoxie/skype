$(function() {
  function s() {
    var e = $(".l_counter").val();
    1 == e
      ? ($(".reduce").addClass("disable"), $(".add").removeClass("disable"))
      : 100 == e
      ? ($(".add").addClass("disable"), $(".reduce").removeClass("disable"))
      : ($(".reduce").removeClass("disable"), $(".add").removeClass("disable"));
  }
  if (
    ($.ajax({
      url: "../data/product_info.json",
      type: "get",
      dataType: "json",
      success: function(e) {
        var t = window.location.search.substring(1).split("=")[1];
        $.each(e.infos, function(e, l) {
          if (l.id == t) {
            var s = '<img src="' + l.imgurl + '" title="' + l.title + '">';
            $(".l_pdctimg").append(s);
            var a =
              '<div class="l_pdctname">' +
              l.title +
              '</div><div class="l_pdcttitle">' +
              l.type +
              '</div><div class="l_price clearfix"><span class="l_text-right">价格:</span><span class="l_real-price"> ' +
              l.price +
              "</span></div>";
            $(".l_discrimination form").prepend(a),
              $.each(l.dis, function(e, l) {
                var s = "<p>" + l + "</p>";
                $(".l_details")
                  .eq(0)
                  .append(s);
              }),
              $.each(l.param, function(e, l) {
                var s = "<p>" + l + "</p>";
                $(".l_details")
                  .eq(1)
                  .append(s);
              });
          }
        });
        var s = "";
        $.each(e.camera, function(e, l) {
          3 <= e ||
            (s +=
              '<a href="/hwstore/product.html?id=306" target="_blank"><img src="' +
              l.imgurl +
              '"><span class="text-center" title="' +
              l.title +
              '">' +
              l.title +
              "</span></a>");
        }),
          $(".l_sidebar").append(s);
      }
    }),
    $(".l_select .icon-down_s").bind("click", function() {
      $(this).toggleClass("open"), $(".l_option").toggleClass("show");
    }),
    $(".l_select ul").on("click", "li", function() {
      console.log($(this).html()),
        $(".l_select span").html($(this).html()),
        $(".l_option").removeClass("show"),
        $(".l_select .icon-down_s").removeClass("open");
    }),
    s(),
    $(".l_listen").on("click", "button", function(e) {
      var l = $(".l_counter").val();
      $(e.target).hasClass("reduce") && 1 != l
        ? (l--,
          $(".l_counter").val(l),
          s(),
          1 == l &&
            ($(".reduce").addClass("disable"),
            $(".add").removeClass("disable")))
        : $(e.target).hasClass("add") &&
          100 != l &&
          (l++,
          $(".l_counter").val(l),
          s(),
          100 == l &&
            ($(".reduce").removeClass("disable"),
            $(".add").addClass("disable")));
    }),
    $(".l_counter").bind("change", function() {
      s();
    }),
    $(".l_tabs ul").on("click", "li", function(e) {
      for (var l = 0; l <= 1; l++)
        $(".l_tabs ul li")
          .eq(l)
          .html() == $(e.target).html() &&
          ($(e.target)
            .siblings()
            .removeClass("choosen"),
          $(e.target).addClass("choosen"),
          $(".l_tabs-content div")
            .eq(l)
            .css("display", "block"),
          $(".l_tabs-content div")
            .eq(l)
            .siblings()
            .css("display", "none"));
    }),
    localStorage.getItem("items"))
  ) {
    var e = JSON.parse(localStorage.getItem("items")).infos,
      a = 0;
    $.each(e, function(e, l) {
      a += Number(l.number);
    }),
      console.log(a),
      $(".l_search a em").html(a);
  }
  $(".l_cartbtn").bind("click", function() {
    var e = window.location.search.substring(1).split("=")[1],
      l = [],
      s = {},
      a = $(".l_counter").val(),
      t = Number(a) + Number($(".l_search a em").html());
    if (
      (console.log(t),
      $(".l_search a em").html(t),
      localStorage.getItem("items"))
    )
      l = JSON.parse(localStorage.getItem("items")).infos;
    else l = [];
    (s.code = e), (s.number = a), l.push(s);
    var i = JSON.stringify({ infos: l });
    localStorage.setItem("items", i);
  });
});
