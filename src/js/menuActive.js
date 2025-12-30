export function MenuActive() {
  const menuWrapper = document.querySelector(".menu__list");

  menuWrapper.addEventListener("click", e => {
    const tab = e.target.closest(".menu__item");
    if (!tab) return;

    menuWrapper
      .querySelectorAll(".menu__item")
      .forEach(t => t.classList.remove("menu__item-active"));

    tab.classList.add("menu__item-active");
  });
}
