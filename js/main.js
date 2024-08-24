document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        $(".loading").fadeOut();
        document.querySelector("body").style.overflow = "visible";
    }
};

let screenWidth = $(window).width();
console.log(screenWidth);
if (screenWidth > 1200) {
    // إضافة الصور
    for (let i = 2; i <= 300; i++) {
        $(".site-body .main-section .profile .img-box").append("<img src='imgs/avatar/mohamedHossam (" + i + ").webp'>");
    }

    // متابعة التمرير
    let scrollFollow = 0;
    let fullScroll = $("html").height() - $(window).height();
    $(window).scroll(function () {
        let scrollNow = $(this).scrollTop();
        if (scrollNow > scrollFollow && scrollNow < fullScroll) {
            let go_down = setInterval(function () {
                if (scrollFollow < scrollNow) {
                    scrollFollow++;
                    let slide = Math.ceil(scrollFollow / fullScroll * 299);
                    console.log(slide);
                    $(".site-body .main-section .profile .img-box img").removeClass("active");
                    $(".site-body .main-section .profile .img-box img:nth-child(" + slide + ")").addClass("active");
                } else {
                    clearInterval(go_down);
                }
            });
        } else if (scrollNow < scrollFollow && scrollNow < fullScroll) {
            let go_up = setInterval(function () {
                if (scrollFollow > scrollNow) {
                    scrollFollow--;
                    let slide = Math.round(scrollFollow / fullScroll * 299) + 1;
                    $(".site-body .main-section .profile .img-box img").removeClass("active");
                    $(".site-body .main-section .profile .img-box img:nth-child(" + slide + ")").addClass("active");
                } else {
                    clearInterval(go_up);
                }
            });
        }
    });
} else {
    $(".site-body .main-section .profile .img-box").append("<div class='float-me'><img src='imgs/me.jpg'></div>");
}

setInterval(function () {
    $(".hello div").toggleClass("flip");
}, 3500);

$(".resume .slider .large-screen .slide1-btn").click(function () {
    $(".resume .slider .slides").css({ transform: "translateX(0px)" });
    $(".resume .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".resume .slider .large-screen .slide2-btn").click(function () {
    $(".resume .slider .slides").css({ transform: "translateX(calc(-100% / 3))" });
    $(".resume .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".resume .slider .small-screen .slide1-btn").click(function () {
    $(".resume .slider .slides").css({ transform: "translateX(0px)" });
    $(".resume .slider .small-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".resume .slider .small-screen .slide2-btn").click(function () {
    $(".resume .slider .slides").css({ transform: "translateX(calc(-100% / 3))" });
    $(".resume .slider .small-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".resume .slider .small-screen .slide3-btn").click(function () {
    $(".resume .slider .slides").css({ transform: "translateX(calc(-100% / 3 * 2))" });
    $(".resume .slider .small-screen button").removeClass("active");
    $(this).addClass("active");
});

$(".testimonials .slider .large-screen .slide1-btn").click(function () {
    $(".testimonials .slider .slides").css({ transform: "translateX(0px)" });
    $(".testimonials .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".testimonials .slider .large-screen .slide2-btn").click(function () {
    $(".testimonials .slider .slides").css({ transform: "translateX(calc(-100% / 5))" });
    $(".testimonials .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".testimonials .slider .large-screen .slide3-btn").click(function () {
    $(".testimonials .slider .slides").css({ transform: "translateX(calc(-100% / 5 * 2))" });
    $(".testimonials .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".testimonials .slider .large-screen .slide4-btn").click(function () {
    $(".testimonials .slider .slides").css({ transform: "translateX(calc(-100% / 5 * 3))" });
    $(".testimonials .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});
$(".testimonials .slider .large-screen .slide5-btn").click(function () {
    $(".testimonials .slider .slides").css({ transform: "translateX(calc(-100% / 5 * 4))" });
    $(".testimonials .slider .large-screen button").removeClass("active");
    $(this).addClass("active");
});

$(".menu-btn").click(function () {
    $(".mode-btn").slideToggle(200);
    $(".side-nav .links-father").slideToggle(200);
});

function sendMail() {
    // جمع البيانات من النموذج
    const nameV = document.getElementById("name").value;
    const emailV = document.getElementById("mail").value;
    const messageV = document.getElementById("message").value;

    // جمع المعلومات الإضافية
    const userAgent = navigator.userAgent;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const platform = navigator.platform;
    const language = navigator.language;
    const accessTime = new Date().toLocaleString();
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isRTL = document.dir === "rtl";
    let connectionType = "N/A";
    let downlink = "N/A";
    let rtt = "N/A";

    if (navigator.connection) {
        connectionType = navigator.connection.effectiveType;
        downlink = navigator.connection.downlink + " Mbps";
        rtt = navigator.connection.rtt + " ms";
    }

    // التحقق من صحة البيانات
    if (nameV && emailV && messageV) {
        const params = {
            name: nameV,
            email: emailV,
            message: messageV,
            userAgent: userAgent,
            browserName: browserName,
            browserVersion: browserVersion,
            platform: platform,
            language: language,
            accessTime: accessTime,
            screenWidth: screenWidth,
            screenHeight: screenHeight,
            colorDepth: colorDepth,
            timeZone: timeZone,
            isRTL: isRTL,
            connectionType: connectionType,
            downlink: downlink,
            rtt: rtt
        };

        const serviceID = "service_4g5pc1m";
        const templateID = "template_pk5b7uz";

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("message").value = "";

                console.log(res);
                document.querySelector(".contact form button").innerHTML = "Thank you for contacting me <span style='color:#78cc6d'><i class='fa-regular fa-circle-check'></i></span>";
            })
            .catch((err) => console.log(err));
    } else {
        const pleaseSpan = document.querySelector(".please span");
        pleaseSpan.style.opacity = "1";
        setTimeout(function () {
            pleaseSpan.style.opacity = "0";
        }, 3000);
    }
}

$(".contact form button").click(function () {
    $(this).attr("disabled", "disabled");
    setTimeout(function () {
        $(".contact form button").removeAttr("disabled");
        $(".contact form button").html("send message <i class='fa-solid fa-arrow-right'></i>");
    }, 3000);
});

let mode = 0;
$(".side-nav .mode-btn").click(function () {
    if (mode == 0) {
        mode = 1;
        $("body").removeClass("dark").addClass("light");
        $(".bg-video video").attr("src", "imgs/r-video-02.mp4");
        $(".side-nav .mode-btn i").show();
        $(".side-nav .mode-btn svg").hide();
    } else {
        mode = 0;
        $("body").addClass("dark").removeClass("light");
        $(".bg-video video").attr("src", "imgs/r-video-01-1.mp4");
        $(".side-nav .mode-btn i").hide();
        $(".side-nav .mode-btn svg").show();
    }
});
