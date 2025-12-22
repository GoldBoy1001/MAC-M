export function FormFindPrice() {
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
}
