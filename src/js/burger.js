export function Burger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (!burger || !menu) return; // безопасная проверка

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}
