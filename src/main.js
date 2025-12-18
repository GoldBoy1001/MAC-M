import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "normalize.css";

import "./style.scss";

import { Burger } from "./js/burger";
import { ScrollGears } from "./js/scrollGears.js";
import { moveTexts } from "./js/moveTexts.js";
import { Tabs } from "./js/tabs.js";

// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".form-find-price__range").forEach(rangeEl => {
    const valueEl = document.querySelector(
      `[data-range-value="${rangeEl.dataset.range}"]`
    );

    if (!valueEl) return;

    const update = () => {
      const min = +rangeEl.min;
      const max = +rangeEl.max;
      const val = +rangeEl.value;

      // ---- процент для заливки ----
      const percent = ((val - min) / (max - min)) * 100;
      rangeEl.style.setProperty("--range-progress", `${percent}%`);

      // ---- текст ----
      valueEl.textContent = val;

      // ---- позиция значения над ползунком ----
      const rangeWidth = rangeEl.offsetWidth;
      const thumbSize = 24; // ОБЯЗАТЕЛЬНО = размеру thumb в CSS

      const left = (percent / 100) * (rangeWidth - thumbSize) + thumbSize / 2;

      valueEl.style.left = `${left}px`;
    };

    update(); // при загрузке
    rangeEl.addEventListener("input", update);
    window.addEventListener("resize", update);
  });

  Tabs();
  moveTexts();
  Burger();
  window.addEventListener("scroll", () => {
    const gear = document.getElementById("gear-group");
    if (gear) {
      const rotation = window.scrollY * 0.3; // скорость вращения
      gear.style.transform = `rotate(${rotation}deg)`;
    }
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
