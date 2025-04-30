import { Navigation, Pagination, Grid, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.keyFeatures', {
    modules: [Navigation, Pagination, Grid, Autoplay],
    loop: false,
    slidesPerView: 'auto',
    grid: {
      rows: 2,
      fill: 'row',
    },
    spaceBetween: 24,
    initialSlide: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-key-features-button-next',
      prevEl: '.swiper-key-features-button-prev',
    },
    pagination: {
      el: '.swiper-key-features-pagination',
      clickable: true,
    },
  });
});
