// core version + navigation, pagination modules:
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
// import { Navigation, Pagination } from 'https://cdn.jsdelivr.net/npm/swiper@10.3.1/+esm';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    observeParents: true,
    observer: true, 
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
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