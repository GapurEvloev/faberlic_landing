import Swiper from "swiper"
// ;node_modules\swiper\js\swiper.min.js
// import owlcarousel from "owl.carousel";

const fashionistaSwiper = new Swiper('#fashionista', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1000,
    // allowTouchMove: false,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: false,
    navigation: {
        prevEl: '#fashionista-prev-custom',
        nextEl: '#fashionista-next-custom',
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesPerGroup: 2
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3
        },
    }
});

const coquetteSwiper = new Swiper('#coquette', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 1000,
    // allowTouchMove: false,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: false,
    navigation: {
        prevEl: '#coquette-prev-custom',
        nextEl: '#coquette-next-custom',
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesPerGroup: 2
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3
        },
    }
});