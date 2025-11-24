export function Burger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", e => {
    e.stopPropagation();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("active-menu");
  });

  // клик вне меню закрывает
  document.addEventListener("click", e => {
    if (
      !menu.contains(e.target) &&
      !burger.contains(e.target) &&
      menu.classList.contains("active")
    ) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      document.body.classList.remove("active-menu");
    }
  });
}
