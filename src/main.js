import "normalize.css";

import "./style.scss";

import { Burger } from "./js/burger";

// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  Burger();
  const gear = document.querySelector(".gear");

  let lastScrollY = window.scrollY;
  let ticking = false;
  let rotation = 0;

  function onScroll() {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    rotation += delta * 0.5; // скорость вращения, можно регулировать
    gear.style.transform = `rotate(${rotation}deg)`;

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
});
