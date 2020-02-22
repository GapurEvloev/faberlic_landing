import Swiper from "swiper"
// ;node_modules\swiper\js\swiper.min.js
// import owlcarousel from "owl.carousel";

const fashionistaSwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    speed: 1000,
    // allowTouchMove: false,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: false,
    navigation: {
        prevEl: '.swiper-button-prev-custom',
        nextEl: '.swiper-button-next-custom',
    },
});

// const coquetteSwiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     speed: 1000,
    
//     // allowTouchMove: false,
//     loop: true,
//     loopFillGroupWithBlank: false,
//     pagination: false,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });