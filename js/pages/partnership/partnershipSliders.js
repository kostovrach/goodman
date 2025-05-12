document.addEventListener("DOMContentLoaded", function () {
  const currentCounter = document.querySelector(".feedback__slider-counter--current");
  const totalCounter = document.querySelector(".feedback__slider-counter--total");

  function updateCounter(swiper) {
    if (!currentCounter || !totalCounter) return;

    currentCounter.textContent = swiper.realIndex + 1;
    totalCounter.textContent = swiper.slides.length;
  }

  const textSliderParams = {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    autoplay: {
      delay: 0,
      paused: false,
    },
    speed: 7000,
    freeMode: true,
  };

  const imageSliderParams = {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 0,
      paused: false,
    },
    speed: 7000,
  };

  const feedbackSliderParams = {
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: updateCounter,
      slideChange: updateCounter,
    },
  };

  new Swiper(".benefits__slider", textSliderParams);
  new Swiper(".ideas__slider", textSliderParams);
  new Swiper(".team__slider", imageSliderParams);
  new Swiper(".feedback__slider", feedbackSliderParams);
});
