// core version + navigation, pagination modules:
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
//import { Navigation, Pagination } from 'https://cdn.jsdelivr.net/npm/swiper@10.3.1/+esm';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
      
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });