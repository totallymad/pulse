// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         // infinite: true,
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" alt="arrow" /></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png" alt="arrow" /></button>',
//         responive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
})

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
})