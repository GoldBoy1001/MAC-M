export function Burger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const wrapper = document.querySelector(".wrapper");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    wrapper.classList.toggle("active-menu");
  });
}
