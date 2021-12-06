// animasi typing
var typed = new Typed(".typing-1", {
    strings: ["back-end developer", "UI/UX designer", "programmer", "front-end developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// navbar scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 30) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })
});