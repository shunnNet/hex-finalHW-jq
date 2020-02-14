$(document).ready(function () {
    // menu slide bar effect --- horizontal
    $(".navMenu > .navMenu__item").hover((event)=>{
        let parent = event.currentTarget;
        let center = parent.clientWidth / 2;
        let enterPoint = event.offsetX;
        let fromleft = enterPoint <= center;
        menuSlide(parent,fromleft,true)
    },(event)=>{
        menuSlideBack(event.currentTarget,true)
    })
    // menu slide bar effect --- vertical
    $(".navMenu__children > .navMenu__item").hover((event)=>{
        let parent = event.currentTarget;
        let center = parent.clientHeight / 2;
        let enterPoint = event.offsetY;
        let fromTop = enterPoint <= center;
        menuSlide(parent,fromTop,false)
    },(event)=>{
        menuSlideBack(event.currentTarget,false)
    })
     function menuSlide(parent,from,isHorizontal){
        let startPos = from ? "-50%" : "50%";
        let { className, prop } = isHorizontal ? 
                                    {className : ".jq__menu__slide-h", prop: "left"} 
                                    : {className : ".jq__menu__slide-v", prop: "top"};
        $(parent).find(className)
                 .css({ [prop] : startPos, visibility : "visible" })
                 .animate({ [prop] : 0 }, 100)
     }
     function menuSlideBack(parent,isHorizontal){
        let { className, prop } = isHorizontal ? 
                                    {className : ".jq__menu__slide-h", prop: "left"} 
                                    : {className : ".jq__menu__slide-v", prop: "top"};
        $(parent).find( className )
                 .css({ [prop] : 0, visibility : "hidden" })
     }
});