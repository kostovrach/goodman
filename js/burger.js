document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".burger__icon");
  const menu = document.querySelector(".burger__wrapper");
  const navItems = document.querySelectorAll(".burger__nav-item");
  const button = document.querySelector(".burger__button");

  function toggleMenu() {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
  }

  function closeMenu() {
    icon.classList.remove("active");
    menu.classList.remove("active");
  }

  icon.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        closeMenu();
      }
    });
  });

  if (button) {
    button.addEventListener("click", closeMenu);
  }

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target !== icon) {
      closeMenu();
    }
  });

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
