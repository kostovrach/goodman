document.addEventListener("DOMContentLoaded", function () {

  const swiperParams = {
    direction: "vertical",
    spaceBetween: 16,
    slidesPerView: "auto",
    initialSlide: 2,
    freeMode: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
  };

  const swiperFirst = new Swiper(".clients__slider-container--1", swiperParams);
  const swiperSecond = new Swiper(".clients__slider-container--2", swiperParams);

  const swipers = [swiperFirst, swiperSecond];

  const videoFilterBtn = document.querySelector("[data-only-video]");
  const textFilterBtn = document.querySelector("[data-only-text]");

  function filterSlides(filterType) {
    swipers.forEach((swiper) => {
      const slides = swiper.slides;

      slides.forEach((slide) => {
        const hasVideo =
          slide.querySelector(".clients-slide__video-wrapper") !== null;
        const hasText = slide.querySelector(".clients-slide__text") !== null;

        switch (filterType) {
          case "video":
            if (hasVideo) {
              slide.style.display = "";
            } else {
              slide.style.display = "none";
            }
            break;
          case "text":
            if (hasText) {
              slide.style.display = "";
            } else {
              slide.style.display = "none";
            }
            break;
          default:
            slide.style.display = "";
        }
      });

      swiper.update();
    });
  }

  videoFilterBtn.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      filterSlides("all");
    } else {
      this.classList.add("active");
      textFilterBtn.classList.remove("active");
      filterSlides("video");
    }
  });

  textFilterBtn.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      filterSlides("all");
    } else {
      this.classList.add("active");
      videoFilterBtn.classList.remove("active");
      filterSlides("text");
    }
  });

  filterSlides("all");

  function isFullscreenSupported() {
    return ( document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled );
  }

  function enterFullscreen(element) {
    if (element.requestFullscreen) {
      return element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      return element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      return element.msRequestFullscreen();
    }
    return Promise.reject("Fullscreen API not supported");
  }

  function isFullscreen() {
    return ( document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement );
  }

  const videoWrappers = document.querySelectorAll(".clients-slide__video-wrapper");

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector(".clients-slide__video");

    if (!video || !isFullscreenSupported()) {
      return;
    }

    wrapper.addEventListener("click", async function () {
      try {
        video.muted = false;
        await video.play();

        await enterFullscreen(video);

        await video.play();
      } catch (error) {
        console.error("Error entering fullscreen:", error);

        if (error.message.includes("fullscreen")) {
          alert("Для просмотра видео в полноэкранном режиме разрешите его в настройках браузера");
        }
      }
    });
  });

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
  document.addEventListener("MSFullscreenChange", handleFullscreenChange);

  function handleFullscreenChange() {
    const videos = document.querySelectorAll(".clients-slide__video");

    if (!isFullscreen()) {
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      });
    }
  }
});
