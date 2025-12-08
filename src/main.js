import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "normalize.css";

import "./style.scss";

import { Burger } from "./js/burger";
import { ScrollGears } from "./js/scrollGears,js";

// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  Burger();
  window.addEventListener("scroll", () => {
    const gear = document.getElementById("gear-group");
    const rotation = window.scrollY * 0.3; // скорость вращения
    gear.style.transform = `rotate(${rotation}deg)`;
  });
  ScrollGears();
  const swiperIndex = new Swiper(".swiper-index", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next-index",
      prevEl: ".swiper-button-prev-index",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 2, spaceBetween: 2 },
      1740: { slidesPerView: 3, spaceBetween: 40 },
    },
  });

  const swiperPartners = new Swiper(".swiper-our-partners-index", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".our-partners-next-index",
      prevEl: ".our-partners-prev-index",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
      1740: { slidesPerView: 3, spaceBetween: 40 },
    },
  });
});
