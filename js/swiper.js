var swiper = new Swiper('.swiper', {
    breakpoints: {
        576: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20
});