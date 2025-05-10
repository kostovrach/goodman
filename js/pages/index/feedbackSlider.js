document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".feedback", {
    loop: true,
    spaceBetween: 50,
    pagination: {
      el: ".feedback__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".overlay__arrow-next",
      prevEl: ".overlay__arrow-prev",
    },
    autoplay: {
      delay: 7000,
    },
  });

  document.querySelectorAll("[data-video-mute]").forEach((button) => {
    button.addEventListener("click", function () {
      const videoWrapper = this.closest(".feedback__video-wrapper");
      const video = videoWrapper.querySelector(".feedback__video");

      video.muted = !video.muted;

      this.classList.toggle("icon-mute");
      this.classList.toggle("icon-unmute");
    });
  });

  document.querySelectorAll("[data-video-fullscreen]").forEach((button) => {
    button.addEventListener("click", function () {
      const videoWrapper = this.closest(".feedback__video-wrapper");
      const video = videoWrapper.querySelector(".feedback__video");

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
  });
});
