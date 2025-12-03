export function ScrollGears() {
  const gears = document.querySelectorAll(".js-gear");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    gears.forEach((gear) => {
      const speed = parseFloat(gear.dataset.speed) || 0.3;
      const direction = parseFloat(gear.dataset.direction) || 1; // 1 или -1

      const rotation = scroll * speed * direction;

      gear.style.transform = `rotate(${rotation}deg)`;
      gear.style.transformOrigin = "50% 50%";
    });
  });
}
