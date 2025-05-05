document.addEventListener("DOMContentLoaded", function () {
  const spoilerItems = document.querySelectorAll(".steps__spoiler-item");

  spoilerItems.forEach((item) => {
    const preview = item.querySelector(".steps__spoiler-item-preview");
    const content = item.querySelector(".steps__spoiler-item-content");

    preview.addEventListener("click", function (e) {
      if (preview.classList.contains("active")) return;

      spoilerItems.forEach((el) => {
        el.querySelector(".steps__spoiler-item-preview").classList.remove("active");
        el.querySelector(".steps__spoiler-item-content").classList.remove("active");
      });

      preview.classList.add("active");
      content.classList.add("active");
    });
  });
});
