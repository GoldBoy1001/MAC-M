import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "normalize.css";

import "./style.scss";

import { Burger } from "./js/burger";

// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  Burger();

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3, // показывать 3 слайда
    spaceBetween: 40, // расстояние между слайдами в пикселях

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-index",
      prevEl: ".swiper-button-prev-index",
    },
    // Можно добавить адаптив
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      1740: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  window.addEventListener("scroll", () => {
    const gear = document.getElementById("gear-group");
    const rotation = window.scrollY * 0.3; // скорость вращения
    gear.style.transform = `rotate(${rotation}deg)`;
  });
});
