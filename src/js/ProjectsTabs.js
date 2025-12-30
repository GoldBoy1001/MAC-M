export function ProjectsTabs() {
  const tabsWrapper = document.querySelector(".projects__tabs");
  if (!tabsWrapper) return;
  tabsWrapper.addEventListener("click", e => {
    const tab = e.target.closest(".projects__tab");
    if (!tab) return;

    e.preventDefault();

    tabsWrapper
      .querySelectorAll(".projects__tab")
      .forEach(t => t.classList.remove("projects__tab-active"));

    tab.classList.add("projects__tab-active");
  });
}
