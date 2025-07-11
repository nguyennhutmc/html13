var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);
function init() {
    $('body').addClass($("main").attr("class"));
    const myCollapsible = document.getElementById('mainNavbar')
    myCollapsible.addEventListener('show.bs.collapse', event => {
        $('body').addClass('sticky');
    });
    myCollapsible.addEventListener('hidden.bs.collapse', event => {
        var winscroll = $(window).scrollTop();
        if(winscroll==0){
            $('body').removeClass('sticky');
        }
    });
}

function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 3.5) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}
$(function () {
    init();
    AOS.init({
        once: true,
        //offset: 300, // offset (in px) from the original trigger point
        delay: 300, // values from 0 to 3000, with step 50ms
        duration:1000, // values from 0 to 3000, with step 50ms
        //anchorPlacement: 'top-center'
    });
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
