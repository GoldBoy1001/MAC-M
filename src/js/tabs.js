export function Tabs() {
  const data = {
    "one-post": {
      title: "Двухстоечный двухуровневый парковочный подъемник",
      description:
        "Классическая двухуровневая парковочная система для размещения 2-х автомобилей на одном месте. Применяется для организации двухуровневой парковки в новом жилом строительстве, бизнес-центрах, сложившейся застройке. Позволяет разместить транспортные средства с различными габаритами, массой. Так же подходит для длительного хранения лодок, квадроциклов, автоприцепов. Что бы купить двухстоечный зависимый парковочный подъемник, рекомендуем связаться с нашими специалистами, которые проведут консультацию и подготовят коммерческое предложение, учитывая ваши потребности и специфику проекта.  Актуальные цены на двухстоечный парковочный подъемник в гараж уточняйте у наших менеджеров.",
      image: "./public/images/parcovka.jpg",
    },
    "two-post": {
      title: "Наклонный подъемник",
      description: "Классическая система для двух автомобилей.",
      image: "./public/images/spelaz.jpg",
    },
    "four-post": {
      title: "Четырехстоечный подъемник",
      description: "Повышенная устойчивость и безопасность.",
      image: "./public/images/podyemnik.jpg",
    },
    "five-post": {
      title: "Независимый подъемник",
      description: "Повышенная устойчивость и безопасность.",
      image: "./public/images/devises.jpg",
    },
    scissor: {
      title: "Автомобильный лифт подъемник",
      description: "Компактное решение для парковок.",
      image: "./public/images/rotor.jpg",
    },
  };

  const tabs = document.querySelectorAll(".lift__tab");
  const image = document.querySelector("[data-lift-image]");
  const title = document.querySelector("[data-lift-title]");
  const description = document.querySelector("[data-lift-description]");
  if (tabs) {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const key = tab.dataset.lift;
        const content = data[key];
        if (!content) return;

        tabs.forEach(t => t.classList.remove("lift__tab--active"));
        tab.classList.add("lift__tab--active");

        image.classList.remove("is-active");

        setTimeout(() => {
          image.src = content.image;
          title.textContent = content.title;
          description.textContent = content.description;

          image.classList.add("is-active");
        }, 200);
      });
    });
  }
}
