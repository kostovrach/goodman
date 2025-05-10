document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq__quastion");
  
    questions.forEach(item => {
      item.addEventListener("click", () => {
        const currentItem = item.parentElement;
        const isActive = currentItem.classList.contains("active");
  
        document.querySelectorAll(".faq__item.active").forEach(item => {
          item.classList.remove("active");
        });
  
        if (!isActive) {
          currentItem.classList.add("active");
        }
      });
    });
  });
  