$(".menu-offer a").on("click", function () {
    let popular = $(".items.popular .item");
    let news = $(".items.new .item");
    let best = $(".items.best .item");
    let specials = $(".items.specials .item");
    $(".menu-offer a").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("popular-link")) {
        popular.addClass("active");
        $(".items.popular").removeClass("dnone");
    } else {
        popular.removeClass("active");
        $(".items.popular").addClass("dnone");
    }

    if ($(this).hasClass("new-link")) {
        news.addClass("active");
        $(".items.new").removeClass("dnone");
    } else {
        news.removeClass("active");
        $(".items.new").addClass("dnone");
    }

    if ($(this).hasClass("best-link")) {
        best.addClass("active");
        $(".items.best").removeClass("dnone");
    } else {
        best.removeClass("active");
        $(".items.best").addClass("dnone");
    }

    if ($(this).hasClass("specials-link")) {
        specials.addClass("active");
        $(".items.specials").removeClass("dnone");
    } else {
        specials.removeClass("active");
        $(".items.specials").addClass("dnone");
    }



});

$(".item").hover(function () {
    $(this).append($("<span class='hov1'>add card</span><span class='hov2'>quick view</span><span class='hov3'>add to wishlist</span><span class='hov4'>add to compare</span>"));
}, function () {
    $(this).find(".hov1, .hov2, .hov3, .hov4").remove().animate({

    });
});
