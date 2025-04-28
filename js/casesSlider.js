const cases = [
  {
    category: "Успешные кейсы",
    image: "media/img/cases/case1.jpg",
    title: "Судебные приставы произвели взыскание с пенсионерки",
    stats: {
      percentIncreaseNumber: "297%",
      percentIncreaseDescription:
        "Размер переплаты, который хотела взыскать кредитная организация с клиента в счет процентов за кредит",
      successRateNumber: "95%",
      successRateDescription:
        "Процент выявленных нарушений в договорной документации",
      durationNumber: "7 месяцев",
      durationDescription: "Продолжительность процесса банкротства",
    },
    description:
      "68-летний жительница Подмосковья Елена П. (имя изменено)  столкнулся с агрессивными действиями кредитной организации, которая бездоказательно взыскивала с него задолженность по сомнительному договору. Несмотря на его неоднократные попытки разобраться в ситуации, представители организации продолжали давить, угрожая судебными и исполнительными мерами.",
    caseNumber: "№4646-1453-24",
    debtReduced: "5 350 000&#8381;",
  },
  {
    category: "Жертвы мошенников",
    image: "https://via.placeholder.com/400x300?text=Фото+2",
    title: "Оптимизация налогообложения",
    stats: {
      percentIncrease: "200%",
      successRate: "90%",
      duration: "4 месяца",
    },
    description: "Предприниматель снизил налоги после консультации...",
    caseNumber: "№896-777-888",
    debtReduced: "2 000 000 ₽",
  },
  {
    category: "Жертвы мошенников",
    image: "https://via.placeholder.com/400x300?text=Фото+2",
    title: "Оптимизация налогообложения",
    stats: {
      percentIncrease: "200%",
      successRate: "90%",
      duration: "4 месяца",
    },
    description: "Предприниматель снизил налоги после консультации...",
    caseNumber: "№896-777-888",
    debtReduced: "2 000 000 ₽",
  },
  {
    category: "Успешные кейсы",
    image: "https://via.placeholder.com/400x300?text=Фото+3",
    title: "Пенсионер спас дом от ареста",
    stats: {
      percentIncrease: "250%",
      successRate: "92%",
      duration: "5 месяцев",
    },
    description: "Помогли пенсионеру сохранить недвижимость...",
    caseNumber: "№123-456-789",
    debtReduced: "500 000 ₽",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const swiperInstances = {};
  let currentCategory = "";

  const prevButton = document.querySelector(".cases__slider-button--prev");
  const nextButton = document.querySelector(".cases__slider-button--next");
  const counterCurrent = document.querySelector(".cases__counter--current");
  const counterTotal = document.querySelector(".cases__counter--total");

  function updateControls(swiper) {
    if (!swiper) return;

    prevButton.classList.toggle("disable", swiper.isBeginning);
    nextButton.classList.toggle("disable", swiper.isEnd);

    if (counterCurrent) counterCurrent.textContent = swiper.realIndex + 1;
    if (counterTotal) counterTotal.textContent = swiper.slides.length;
  }

  function initNavigation() {
    if (prevButton) {
      prevButton.addEventListener("click", function () {
        if (
          swiperInstances[currentCategory] &&
          !this.classList.contains("disable")
        ) {
          swiperInstances[currentCategory].slidePrev();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        if (
          swiperInstances[currentCategory] &&
          !this.classList.contains("disable")
        ) {
          swiperInstances[currentCategory].slideNext();
        }
      });
    }
  }

  function renderTags(categories) {
    const tagsContainer = document.getElementById("cases-tags");
    if (!tagsContainer) return;

    tagsContainer.innerHTML = "";

    categories.forEach((category, index) => {
      const button = document.createElement("button");
      button.className = "cases__tag";
      if (index === 0) {
        button.classList.add("cases__tag--active");
        currentCategory = category;
      }
      button.textContent = category;
      button.dataset.category = category;

      button.addEventListener("click", function () {
        switchCategory(this.dataset.category);
      });

      tagsContainer.appendChild(button);
    });
  }

  function renderSwipers(casesByCategory) {
    const slidersContainer = document.getElementById("cases-sliders");
    if (!slidersContainer) return;

    slidersContainer.innerHTML = "";

    Object.entries(casesByCategory).forEach(([category, caseItems]) => {
      const wrapper = document.createElement("div");
      wrapper.className = "cases__slider-wrapper";
      wrapper.dataset.category = category;

      if (category !== Object.keys(casesByCategory)[0]) {
        wrapper.style.display = "none";
      }

      const uniqueId = `swiper-${category.replace(/\s+/g, "-")}`;

      wrapper.innerHTML = `
          <div class="cases__slider swiper" id="${uniqueId}">
            <div class="cases__slider-inner swiper-wrapper">
              ${caseItems
                .map(
                  (item) => `
                <div class="cases__slide swiper-slide">
                  <div class="cases__slide-content">
                    <div class="cases__slide-left">
                      <img class="cases__slide-image" src="${item.image}" alt="" />
                      <h3 class="cases__slide-title">${item.title}</h3>
                    </div>
                    <div class="cases__slide-right">
                      <div class="cases__slide-stats">
                        <div class="cases__slide-stat">
                          <div class="cases__slide-stat-percent--number">${item.stats.percentIncreaseNumber}</div>
                          <div class="cases__slide-stat-percent--description">${item.stats.percentIncreaseDescription}</div>
                        </div>
                        <div class="cases__slide-stat">
                          <div class="cases__slide-stat-rate--number">${item.stats.successRateNumber}</div>
                          <div class="cases__slide-stat-rate--description">${item.stats.successRateDescription}</div>
                        </div>
                        <div class="cases__slide-stat">
                          <div class="cases__slide-stat-dur--number">${item.stats.durationNumber}</div>
                          <div class="cases__slide-stat-dur--description">${item.stats.durationDescription}</div>
                        </div>
                      </div>
                      <div class="cases__slide-description">
                        <p class="cases__slide-text">${item.description}</p>
                        <div class="cases__slide-summary">
                          <div class="cases__slide-summary--number">${item.caseNumber}</div>
                          <div class="cases__slide-summary--debt">Списанный долг: <span class="cases__slide-summary--accent">${item.debtReduced}</span></div>
                        </div>
                        <div class="cases__slide-links">
                          <a href="#" class="cases__slide-links--check">Проверить дело</a>
                          <a href="#" class="cases__slide-links--more">Подробнее</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;

      slidersContainer.appendChild(wrapper);

      const swiper = new Swiper(`#${uniqueId}`, {
        slidesPerView: 1,
        speed: 800,
        //  effect: 'creative',
        //  creativeEffect: {
        //    prev: {
        //      translate: [0, 0, -400],
        //    },
        //    next: {
        //      translate: ['100%', 0, 0],
        //      rotate: [0, 0, -20],
        //      opacity: 0,
        //    },
        //  },
        on: {
          init: function () {
            if (category === currentCategory) {
              updateControls(this);
            }
          },
          slideChange: function () {
            if (category === currentCategory) {
              updateControls(this);
            }
          },
          reachBeginning: function () {
            if (category === currentCategory) {
              updateControls(this);
            }
          },
          reachEnd: function () {
            if (category === currentCategory) {
              updateControls(this);
            }
          },
        },
      });

      swiperInstances[category] = swiper;
    });

    initNavigation();
  }

  function switchCategory(category) {
    document.querySelectorAll(".cases__tag").forEach((tag) => {
      tag.classList.toggle(
        "cases__tag--active",
        tag.dataset.category === category
      );
    });

    document.querySelectorAll(".cases__slider-wrapper").forEach((wrapper) => {
      wrapper.style.display =
        wrapper.dataset.category === category ? "block" : "none";
    });

    currentCategory = category;

    if (swiperInstances[category]) {
      updateControls(swiperInstances[category]);
    }
  }

  function init() {
    const categories = [...new Set(cases.map((c) => c.category))];
    const casesByCategory = {};

    categories.forEach((cat) => {
      casesByCategory[cat] = cases.filter((c) => c.category === cat);
    });

    renderTags(categories);
    renderSwipers(casesByCategory);
  }

  init();
});
