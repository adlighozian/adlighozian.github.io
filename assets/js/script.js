// animasi typing
var typed = new Typed(".typing-1", {
    strings: ["Back-end Developer", "Front-end Developer", "Laravel Web Application"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
/* batas=================================================================================================================================== */

// navbar scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 1) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 1) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

/* batas=================================================================================================================================== */

//slide-up script
$('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
});

/* batas=================================================================================================================================== */

//active navbar
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY - 500 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/* batas=================================================================================================================================== */

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});



