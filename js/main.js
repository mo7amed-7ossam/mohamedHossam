// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.overflow = "hidden";
//         document.querySelector(".loading").style.visibility = "visible";
//     } else {
//         $(".loading").fadeOut();
//         document.querySelector("body").style.overflow = "visible";
//     }
// };

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