document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        $(".loading").fadeOut();
        document.querySelector("body").style.overflow = "visible";
        
    }
};

// img

for (i = 2; i <= 300; i++) {
    $(".site-body .main-section .profile .img-box ").append("<img src='imgs/avatar/mohamedHossam (" + i + ").webp' >")
}


// scroll img

scrollFollow = 0

let fullScroll = $("html").height() - $(window).height();
$(window).scroll(function () {
    scrollNow = $(this).scrollTop();
    if (scrollNow > scrollFollow && scrollNow < fullScroll) {
        go_down = setInterval(function () {
            if (scrollFollow < scrollNow) {
                scrollFollow++;
                let slide = Math.round(scrollFollow / fullScroll * 300);
                $(".site-body .main-section .profile .img-box img").removeClass("active")
                $(".site-body .main-section .profile .img-box  img:nth-child(" + slide + ")").addClass("active")
            } else {
                clearInterval(go_down)
            }
        })

    } else if (scrollNow < scrollFollow && scrollNow < fullScroll) {
        go_up = setInterval(function () {
            if (scrollFollow > scrollNow) {
                scrollFollow--;
                let slide = Math.round(scrollFollow / fullScroll * 300) + 1;
                $(".site-body .main-section .profile .img-box img").removeClass("active")
                $(".site-body .main-section .profile .img-box  img:nth-child(" + slide + ")").addClass("active")
            } else {
                clearInterval(go_up)
            }
        })
    }



})



setInterval(function(){
    $(".hello div").toggleClass("flip")
},3500)


$(".resume .slider .large-screen .slide1-btn").click(function(){
    $(".resume .slider .slides").css({transform:"translateX(0px)"})
    $(".resume .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})
$(".resume .slider .large-screen .slide2-btn").click(function(){
    $(".resume .slider .slides").css({transform:"translateX(calc(-100% / 3 ))"})
    $(".resume .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})

$(".testimonials .slider .large-screen .slide1-btn").click(function(){
    $(".testimonials .slider .slides").css({transform:"translateX(0px)"})
    $(".testimonials .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})
$(".testimonials .slider .large-screen .slide2-btn").click(function(){
    $(".testimonials .slider .slides").css({transform:"translateX(calc(-100% / 5 ) )"})
    $(".testimonials .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})
$(".testimonials .slider .large-screen .slide3-btn").click(function(){
    $(".testimonials .slider .slides").css({transform:"translateX(calc(-100% / 5 * 2) )"})
    $(".testimonials .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})
$(".testimonials .slider .large-screen .slide4-btn").click(function(){
    $(".testimonials .slider .slides").css({transform:"translateX(calc(-100% / 5 * 3) )"})
    $(".testimonials .slider .large-screen button").removeClass("active")
    $(this).addClass("active")
})