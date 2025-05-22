const cases = [
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Сложная финансовая ситуация",
		stats: {
			percentIncreaseNumber: ">600 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2022",
			successRateDescription: "Год завершения дела",
			durationNumber: "< 1 года",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description:
			"Елена Рифатовна обратилась в нашу компанию с долгом почти 700 тысяч рублей. Сложная финансовая ситуация, морально Елене Рифатовне было очень сложно. На бесплатной консультации мы провели правовой и финансовый анализ ситуации, разработали стратегию решения проблемы. Далее подготовили все документы, составили заявление в Арбитражный суд. В январе 2022 получили решение суда о признании банкротом. Далее арбитражный управляющий Прасолов Павел Александрович подготовил отчет в суд, на основании которого в июле 2022 года долги признаны безнадежными, их полностью списали. С этого момента Елена Рифатовна свободна от долгов, списали 691 тыс 145 рублей.",
		caseNumber: "А55-33439/2021",
		debtReduced: "691 145&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Банки увеличили проценты в несколько раз",
		stats: {
			percentIncreaseNumber: ">360 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2022",
			successRateDescription: "Год завершения дела",
			durationNumber: "< 1 года",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Татьяна Николаевна обратилась в нашу компанию с долгом более 360 тысяч рублей, который образовался в пандемию, когда появились проблемы с работой. Банки вместо кредитных каникул за просрочки увеличили проценты в несколько раз. Финансовая ситуация стала ещё сложнее. На бесплатной консультации мы сделали правовой и финансовый анализ ситуации, разработали стратегию решения всех проблем. Заключили договор и оформили доверенность, чтобы собрать полный пакет документов и представлять интересы в Арбитражном суде. Далее арбитражный управляющий Прасолов Павел Александрович подготовил отчет в суд, на основании которого в июле 2022 года долги признаны безнадежными, их полностью списали. С этого момента Татьяна Николаевна свободна от долгов и больше никому ничего не должна.",
		caseNumber: "А55-33439/2021",
		debtReduced: ">360 000&#8381;",
	},
	{
		category: "Жертвы коллекторов",
		image: "media/img/cases/case1.jpg",
		title: "Коллекторы угрожали семье",
		stats: {
			percentIncreaseNumber: ">1 млн",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2022",
			successRateDescription: "Год завершения дела",
			durationNumber: "< 1 года",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Мария Александровна обратилась в нашу компанию с долгом более миллиона рублей, просрочками, с просьбой избавить от коллекторов, которые угрожали ей и семье. На бесплатной консультации мы сделали правовой и финансовый анализ ситуации, разработали стратегию решения всех проблем. Заключили договор и оформили доверенность, чтобы от лица клиента собрать полный пакет документов и представлять интересы в Арбитражном суде. Избавили от общения с коллекторами: подключили переадресацию на телефон компании, направили жалобы в фссп на работу коллекторского агентства. Далее арбитражный управляющий Прасолов Павел Александрович подготовил отчет в суд, на основании которого в феврале 2022 года долги признаны безнадежными, их полностью списали. С этого момента Мария Александровна свободна от долгов и больше никому ничего не должна.",
		caseNumber: "А55-33439/2021",
		debtReduced: ">1 000 000&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Кредит на бизнес",
		stats: {
			percentIncreaseNumber: ">1 млн",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Михаил взял кредит, который вложил в бизнес, но заработать в этом деле не получилось6 а долг остался. Чтобы иметь возможность развиваться дальше, Михаил решил списать долги через процедуру банкротства. Юрист на первой консультации разработал стратегию, сразу приступили к работе. Мы собрали все документы, подали заявление в Арбитражный суд, и 7 июля 2021г нашего клиента признали банкротом. 23 декабря 2021г завершили процедуру и списали долг на сумму 1 004 709 руб.",
		caseNumber: "А57-14577/2021",
		debtReduced: "1 004 709&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Сложная финансовая ситуация",
		stats: {
			percentIncreaseNumber: "<1 млн",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "< 1 года",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Юлия Васильевна обратилась в нашу компанию с долгами, она исправно вносила платежи по кредитам, но финансовая ситуация резко изменилась. Долг большой, оставить всё как есть и терпеть звонки коллекторов, списание половины доходов приставами в течение нескольких лет невозможно. Знакомые порекомендовали нашу компанию. Мы провели правовой и финансовый анализ ситуации. На первой консультации предложили решение проблемы и стратегию. Юлия Васильевна была рада, что решение найдено. Далее заключили договор, и сразу начали работу над делом. Собрали документы, справки, выписки, составили заявление, подали всё в Арбитражный суд. 13.07.2021г нашего клиента признали банкротом. 16.12.2021г завершили процедуру и полностью списали все долги. Теперь Юлия Васильевна никому ничего не должна.",
		caseNumber: "А55-14580/2021",
		debtReduced: "<1 000 000&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Непосильные платежи",
		stats: {
			percentIncreaseNumber: ">600 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "У Ольги Васильевны появились финансовые трудности из-за кредитов, по которым сначала получалось платить. Но появились проблемы, платежи стали непосильными. Когда ситуация вышла из-под контроля Ольга Васильевна обратилась к нам за консультацией. На первой встрече юристы дали оценку ситуации, разработали план действий. После заключения договора, мы взяли всю работу на себя. Собрали полный пакет документов, подали заявление в арбитражный суд. 21 мая 2021 г Ольгу Васильевну признали банкротом. 30 ноября 2021г завершили процедуру и списали долг на сумму 671 984 руб.",
		caseNumber: "А55-9577/2021",
		debtReduced: "671 984&#8381;",
	},
	{
		category: "Жертвы коллекторов",
		image: "media/img/cases/case1.jpg",
		title: "Сложная финансовая ситуация",
		stats: {
			percentIncreaseNumber: ">900 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Алексей Сергеевич пришел к нам, когда размер долга был 982 856 руб. Алексей Сергеевич сначала вносил платежи по кредитам, но финансовая ситуация резко изменилась. Долг большой, оставить всё как есть и терпеть звонки коллекторов, списание половины доходов в течение нескольких лет невозможно. Мы провели правовой и финансовый анализ ситуации. На первой консультации предложили решение проблемы и стратегию. Далее заключили договор, взяли всю работу на себя. Услуги компании можно оплачивать в рассрочку, платежи по кредитам не вносить, поэтому жить легче сразу. 17 мая 2021г нашего клиента признали банкротом. В течение всей процедуры мы поддерживаем связь с клиентом, отчитываемся о каждом этапе и отвечаем на все вопросы. 22 ноября 2021г завершили процедуру и полностью списали все долги.",
		caseNumber: "А55-9580/2021",
		debtReduced: "982 856&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Потеря работы",
		stats: {
			percentIncreaseNumber: ">900 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "У Марины Федоровны появились финансовые трудности из-за кредитов, по которым сначала получалось платить. Но появились проблемы с работой. В итоге накопился большой долг и платежи по нему стали непосильными. Когда ситуация вышла из-под контроля Марина Федоровна обратилась к нам за консультацией. На первой встрече юристы дали оценку ситуации, разработали план действий. После заключения договора, мы взяли всю работу на себя. Собрали полный пакет документов, подали заявление в арбитражный суд. 9 марта 2021 г Марину Федоровну признали банкротом. 15 ноября 2021г завершили процедуру и списали долг на сумму 913.701 руб. Долг полностью списан, только представьте, сколько лет бы пришлось клиенту выплачивать всю эту сумму, а теперь она свободна от кредитов.",
		caseNumber: "А55-36431/2020",
		debtReduced: "913 701&#8381;",
	},
	{
		category: "Успешные кейсы",
		image: "media/img/cases/case1.jpg",
		title: "Кредиты в нескольких банках",
		stats: {
			percentIncreaseNumber: ">700 т.р.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Людмила Николаевна обратилась к нам с долгами более семисот тысяч рублей в нескольких банках. Ситуация казалась клиенту безвыходной, но мы рассказали, как можно списать долги навсегда. На первой бесплатной консультации провели правовой анализ документов, сделали расчет и приняли решение о начале процедуры банкротства. Мы собрали более 20 документов и справок, написали заявление, подали их в Арбитражный суд. 19 апреля 2021 г. нашего клиента признали банкротом, исполнительное производство закрыли. Далее начал работу арбитражный управляющий. Убедили суд, что долг безнадежен и 10 ноября 2021г. завершили процедуру. Долги полностью списали. Сумма долга была 718. 502, 91 руб. Теперь Людмила Николаевна никому ничего не должна.",
		caseNumber: "А55-7051/2021",
		debtReduced: "718 502&#8381;",
	},
	{
		category: "Жертвы коллекторов",
		image: "media/img/cases/case1.jpg",
		title: "Кредиты в нескольких банках",
		stats: {
			percentIncreaseNumber: ">1.5 млн.",
			percentIncreaseDescription: "Размер долга клиента",
			successRateNumber: "2021",
			successRateDescription: "Год завершения дела",
			durationNumber: "< 6 месяцев",
			durationDescription: "Продолжительность процесса банкротства",
		},
		description: "Иванов Денис Любомиров пришел к нам по рекомендации знакомых и теперь свободен от долгов. Наш клиент брал кредит в банках, МФО, вносил платежи, но внезапно жизненная ситуация изменилась, появились просрочки. Сначала стала беспокоить служба безопасности банка, затем коллекторы. Денис понял, что проблему надо решать. Юрист на первой консультации разработал стратегию, сразу приступили к работе, защитив нашего клиента от коллекторов. Мы собрали все документы, подали заявление в Арбитражный суд, и 30 апреля 2021г нашего клиента признали банкротом. 1 ноября 2021г завершили процедуру и списали долг на сумму 1 773 214, 98 руб. Проблемы с долгами могут возникнуть внезапно, в этом нет ничего страшного, обращайтесь за помощью к юристам по банкротству.",
		caseNumber: "А55-6614/2021",
		debtReduced: "1 773 214&#8381;",
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
				if (swiperInstances[currentCategory] && !this.classList.contains("disable")) {
					swiperInstances[currentCategory].slidePrev();
				}
			});
		}

		if (nextButton) {
			nextButton.addEventListener("click", function () {
				if (swiperInstances[currentCategory] && !this.classList.contains("disable")) {
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
				spaceBetween: 30,
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
			tag.classList.toggle("cases__tag--active", tag.dataset.category === category);
		});

		document.querySelectorAll(".cases__slider-wrapper").forEach((wrapper) => {
			wrapper.style.display = wrapper.dataset.category === category ? "block" : "none";
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
