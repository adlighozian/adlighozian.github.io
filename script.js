// animasi typing
var typed = new Typed(".typing-1", {
    strings: ["Back-end Developer", "UI/UX Designer", "Programmer", "Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

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

//slide-up script
$('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
});

//active navbar
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);