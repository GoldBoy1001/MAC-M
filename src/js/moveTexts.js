export function moveTexts() {
  const bannerTexts = document.querySelector(".about-banner__texts");
  const bannerBody = document.querySelector(".about-banner__body");
  const certificateBody = document.querySelector(".about-certificate__body");
  const BREAKPOINT = 480;

  // Функция перемещения элемента
  function moveBannerTexts(width) {
    if (width < BREAKPOINT) {
      // вставляем первым элементом в about-certificate__body
      if (certificateBody.firstElementChild !== bannerTexts) {
        certificateBody.insertBefore(bannerTexts, certificateBody.firstChild);
      }
    } else {
      // вставляем последним элементом в about-banner__body
      if (bannerBody.lastElementChild !== bannerTexts) {
        bannerBody.appendChild(bannerTexts);
      }
    }
  }

  // Инициализация
  moveBannerTexts(window.innerWidth);

  // ResizeObserver следит за изменением размера окна
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const width = entry.contentRect.width;
      moveBannerTexts(width);
    }
  });

  // наблюдаем за document.body
  resizeObserver.observe(document.body);
}
