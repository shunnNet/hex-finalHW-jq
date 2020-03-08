$(document).ready(function () {
    bindEventMenuSlideBarHorizon()
    bindEventMenuSlideBarVertical()
    bindEventScrollTopButton()
    bindEventToggleMenu()
    bindEventToggleMenuItem()
    activeSwiper()

    function bindEventMenuSlideBarHorizon() {
        $(".navMenu > .navMenu__item").hover((event) => {
            let parent = event.currentTarget;
            let center = parent.clientWidth / 2;
            let enterPoint = event.offsetX;
            let fromleft = enterPoint <= center;
            menuSlide(parent, fromleft, true)
        }, (event) => {
            menuSlideBack(event.currentTarget, true)
        })
    }
    function bindEventMenuSlideBarVertical() {
        $(".navMenu__children > .navMenu__item").hover((event) => {
            let parent = event.currentTarget;
            let center = parent.clientHeight / 2;
            let enterPoint = event.offsetY;
            let fromTop = enterPoint <= center;
            menuSlide(parent, fromTop, false)
        }, (event) => {
            menuSlideBack(event.currentTarget, false)
        })
    }

    function menuSlide(parent, from, isHorizontal) {
        let startPos = from ? "-50%" : "50%";
        let { className, prop } = isHorizontal ?
            { className: ".jq__menu__slide-h", prop: "left" }
            : { className: ".jq__menu__slide-v", prop: "top" };
        $(parent).find(className)
            .css({ [prop]: startPos, visibility: "visible" })
            .animate({ [prop]: 0 }, 100)
    }
    function menuSlideBack(parent, isHorizontal) {
        let { className, prop } = isHorizontal ?
            { className: ".jq__menu__slide-h", prop: "left" }
            : { className: ".jq__menu__slide-v", prop: "top" };
        $(parent).find(className)
            .css({ [prop]: 0, visibility: "hidden" })
    }

    function bindEventScrollTopButton() {
        $("#jq-scroll-top").click((event) => {
            $("html").animate({
                scrollTop: 0
            }, 500)
        })
    }
    function bindEventToggleMenu() {
        $("#jq_slide_down").click(event => {
            $("#jq_slideDown_menu").slideToggle(300)
                .toggleClass("navMenu--mobile--active")
        })
    }
    function bindEventToggleMenuItem() {
        $(".jq_slide_down").click(event => {
            $(event.currentTarget).siblings('ul').slideToggle(300)
        })
    }
    function activeSwiper(){
        return new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 5000,
            },
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
});