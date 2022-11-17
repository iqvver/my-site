import $ from "jquery";

/**
 * @param {Animation} now 
 */
export const AnimationFooter = () => {
    $(window).scroll(function () {
        $(".footer-animate").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 450) {
                $(this).addClass("animate__animated animate__zoomIn");
            }
        });
    });
}
export const AnimationAbout = () => {
    $(window).scroll(function () {
        $(".about__descr").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 550) {
                $(this).addClass("about__descr_active animate__animated animate__slideInRight");
            }
        });
    });
}
export const AnimationPortfolio = () => {
    $(window).scroll(function () {
        $(".portfolio__wrapper").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 450) {
                $(this).addClass("portfolio__wrapper_active animate__animated animate__fadeInRight");
            }
        });
    });
}
export const AnimationContact = () => {
    $(window).scroll(function () {
        $(".contact__form").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("contact__form_active animate__animated animate__fadeInUp");
            }
        });
    });
}