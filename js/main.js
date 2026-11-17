document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        $(".loading").fadeOut();
        document.querySelector("body").style.overflow = "visible";
    }
};

$(document).ready(function () {
    // let screenWidth = $(window).width();
    // console.log(screenWidth);

    // if (screenWidth > 1200) {
    //     // Append images
    //     for (let i = 2; i <= 300; i++) {
    //         $(".site-body .main-section .profile .img-box").append("<img src='imgs/avatar/mohamedHossam (" + i + ").webp' >");
    //     }

    //     // Scroll image logic
    //     let scrollFollow = 0;
    //     let fullScroll = $("html").height() - $(window).height();

    //     $(window).scroll(function () {
    //         let scrollNow = $(this).scrollTop();
    //         let slide;

    //         if (scrollNow > scrollFollow && scrollNow < fullScroll) {
    //             let go_down = setInterval(function () {
    //                 if (scrollFollow < scrollNow) {
    //                     scrollFollow++;
    //                     slide = Math.ceil(scrollFollow / fullScroll * 299);
    //                     $(".site-body .main-section .profile .img-box img").removeClass("active");
    //                     $(".site-body .main-section .profile .img-box img:nth-child(" + slide + ")").addClass("active");
    //                 } else {
    //                     clearInterval(go_down);
    //                 }
    //             }, 10);
    //         } else if (scrollNow < scrollFollow && scrollNow < fullScroll) {
    //             let go_up = setInterval(function () {
    //                 if (scrollFollow > scrollNow) {
    //                     scrollFollow--;
    //                     slide = Math.round(scrollFollow / fullScroll * 299) + 1;
    //                     $(".site-body .main-section .profile .img-box img").removeClass("active");
    //                     $(".site-body .main-section .profile .img-box img:nth-child(" + slide + ")").addClass("active");
    //                 } else {
    //                     clearInterval(go_up);
    //                 }
    //             }, 10);
    //         }
    //     });
    // } else {
    //     $(".site-body .main-section .profile .img-box").append("<div class='float-me'><img src='imgs/me.jpg'></div>");
    // }

    setInterval(function () {
        $(".hello div").toggleClass("flip");
    }, 3500);

    // Accessible experience carousel: two cards on desktop, one on small screens.
    const experienceSlider = document.querySelector(".experience-slider");
    if (experienceSlider) {
        const track = experienceSlider.querySelector(".slides");
        const cards = Array.from(experienceSlider.querySelectorAll(".experience-card"));
        const range = experienceSlider.querySelector(".experience-range");
        const progress = experienceSlider.querySelector(".experience-progress");
        const progressFill = progress.querySelector("span");
        const previous = experienceSlider.querySelector('[data-experience-direction="-1"]');
        const next = experienceSlider.querySelector('[data-experience-direction="1"]');
        let firstVisible = 0;

        const visibleCount = () => window.matchMedia("(max-width: 760px)").matches ? 1 : 2;
        const updateExperienceSlider = () => {
            const count = visibleCount();
            const maxFirst = Math.max(0, cards.length - count);
            firstVisible = Math.min(firstVisible, maxFirst);
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            const step = cards[0].getBoundingClientRect().width + gap;
            track.style.transform = `translateX(${-firstVisible * step}px)`;

            const lastVisible = Math.min(firstVisible + count, cards.length);
            range.textContent = `${String(firstVisible + 1).padStart(2, "0")}–${String(lastVisible).padStart(2, "0")}`;
            previous.disabled = firstVisible === 0;
            next.disabled = firstVisible === maxFirst;
            progress.setAttribute("aria-valuemax", String(maxFirst + 1));
            progress.setAttribute("aria-valuenow", String(firstVisible + 1));
            progressFill.style.width = `${((firstVisible + 1) / (maxFirst + 1)) * 100}%`;

            cards.forEach((card, index) => {
                card.setAttribute("aria-hidden", String(index < firstVisible || index >= lastVisible));
            });
        };

        experienceSlider.querySelectorAll("[data-experience-direction]").forEach((button) => {
            button.addEventListener("click", () => {
                firstVisible += Number(button.dataset.experienceDirection);
                updateExperienceSlider();
            });
        });

        experienceSlider.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight" && !next.disabled) next.click();
            if (event.key === "ArrowLeft" && !previous.disabled) previous.click();
        });

        window.addEventListener("resize", updateExperienceSlider);
        updateExperienceSlider();
    }

    // Testimonials slider buttons
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

    // Menu button
    $(".menu-btn").click(function () {
        $(".mode-btn").slideToggle(200);
        $(".side-nav .links-father").slideToggle(200);
    });

    // Contact form button click event
    $(".contact form button").click(function () {
        $(this).attr("disabled", "disabled");
        sendMail(); // Send email on button click
        setTimeout(function () {
            $(".contact form button").removeAttr("disabled");
            $(".contact form button").html("Send message <i class='fa-solid fa-arrow-right'></i>");
        }, 3000);
    });

    // Mode switch button
    let mode = 0;
    $(".side-nav .mode-btn").click(function () {
        if (mode === 0) {
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

    // Capture additional browser data on load
    window.onload = function () {
        sendVisitData(); // Send visit data on page load
    };
});

// Send email function using EmailJS
function sendMail() {
    const nameV = document.getElementById("name").value;
    const emailV = document.getElementById("mail").value;
    const messageV = document.getElementById("message").value;

    if (nameV && emailV && messageV) {
        const params = {
            name: nameV,
            email: emailV,
            message: messageV,
        };

        const serviceID = "service_yf2vi5x";
        const templateID = "template_pk5b7uz";

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("message").value = "";

                console.log("Email sent successfully:", res.status, res.text);
                document.querySelector(".contact form button").innerHTML = "Thank you for contacting me <span style='color:#78cc6d'><i class='fa-regular fa-circle-check'></i></span>";
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
            });
    } else {
        const pleaseSpan = document.querySelector(".please span");
        pleaseSpan.style.opacity = "1";
        setTimeout(function () {
            pleaseSpan.style.opacity = "0";
        }, 3000);
    }
}

// Send visit data function using EmailJS
function sendVisitData() {
    // Fetch IP address using ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const accessTime = new Date().toLocaleString();
            const screenWidth = screen.width;
            const screenHeight = screen.height;
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const ipAddress = data.ip;

            const params = {
                IPAddress: ipAddress,
                AccessTime: accessTime,
                ScreenWidth: screenWidth,
                ScreenHeight: screenHeight,
                TimeZone: timeZone,
            };

            const serviceID = "service_yf2vi5x";
            const templateID = "template_n0aalwa";

            emailjs.send(serviceID, templateID, params)
                .then((res) => {
                    console.log("Visit data sent successfully:", res.status, res.text);
                })
                .catch((err) => {
                    console.error("Failed to send visit data:", err);
                });
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
}
