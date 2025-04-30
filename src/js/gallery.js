import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: -50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      1440: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });
});
