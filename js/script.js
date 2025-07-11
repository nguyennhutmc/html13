var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);
function init() {
    $('body').addClass($("main").attr("class"));
}

function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 5) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}
$(function () {
    init();
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
