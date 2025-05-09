let scrollPosition = 0;
let lastTriggerButton = null;

function handleScrollReturn() {
  document.body.classList.remove("block-scroll");
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
  if (lastTriggerButton) lastTriggerButton.focus();
}

function handleScrollBlock(triggerButton) {
  scrollPosition = window.pageYOffset;
  lastTriggerButton = triggerButton;
  document.body.classList.add("block-scroll");
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

// Инициализация Privacy
const modalPrivacy = document.querySelector("#modal-privacy");
const openPrivacyBtns = document.querySelectorAll("[data-privacy-open]");
const closePrivacyBtn = modalPrivacy?.querySelector(".modal-privacy__closeBtn");

if (modalPrivacy) {
  openPrivacyBtns.forEach((el) => {
    el.addEventListener("click", function() {
      handleScrollBlock(this);
      modalPrivacy.showModal();
    });
  });

  if (closePrivacyBtn) {
    closePrivacyBtn.addEventListener("click", () => modalPrivacy.close());
  }

  modalPrivacy.addEventListener('close', handleScrollReturn);
  modalPrivacy.addEventListener('cancel', handleScrollReturn);
  modalPrivacy.addEventListener('click', (e) => {
    if (e.target === modalPrivacy) modalPrivacy.close();
  });
}

// Инициализация Call
const modalCall = document.querySelector("#modal-call");
const openCallBtns = document.querySelectorAll("[data-call-open]");
const closeCallBtn = modalCall?.querySelector(".modal-form__closeBtn");

if (modalCall) {
  openCallBtns.forEach((el) => {
    el.addEventListener("click", function() {
      handleScrollBlock(this);
      modalCall.showModal();
    });
  });

  if (closeCallBtn) {
    closeCallBtn.addEventListener("click", () => modalCall.close());
  }

  modalCall.addEventListener('close', handleScrollReturn);
  modalCall.addEventListener('cancel', handleScrollReturn);
  modalCall.addEventListener('click', (e) => {
    if (e.target === modalCall) modalCall.close();
  });
}

// const modalPrivacy = document.querySelector("#modal-privacy");
// const openPrivacyBtn = document.querySelectorAll("[data-privacy-open]");
// const closePrivacyBtn = modalPrivacy.querySelector(".modal-privacy__closeBtn");

// function scrollReturn() {
//   document.body.classList.remove("block-scroll");
// }
// function scrollBlock() {
//   document.body.classList.add("block-scroll");
// }

// function openPrivacyModal() {
//   modalPrivacy.showModal();
//   scrollBlock();
// }

// function closePrivacyModal() {
//   modalPrivacy.close();
//   scrollReturn();
// }

// openPrivacyBtn.forEach((el) => {
//   el.addEventListener("click", () => {
//     openPrivacyModal();
//   });
// });
// closePrivacyBtn.addEventListener("click", () => {
//   closePrivacyModal();
// });
// modalPrivacy.addEventListener('cancel', () => {
//   scrollReturn();
// })