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
});
$(window).load(function(){
    if ($(window).width() >= 992) {
        var set_offset=280,
            set_mirror=true;
    }
    else{
        var set_offset=0,
            set_mirror=true;
    }
    AOS.init({
        once: false,
        offset: set_offset, // offset (in px) from the original trigger point
        delay: 1, // values from 0 to 3000, with step 50ms
        //duration:500, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-sine',
        mirror: set_mirror,
        //anchorPlacement: 'top-top',
    });
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    if ($(window).width() < 992) {
        _sticky();
        //AOS.refreshHard();
    }
});
