const modalPrivacy = document.querySelector('#modal-privacy');
const openPrivacyBtn = document.querySelectorAll('[data-privacy-open]');
const closePrivacyBtn = modalPrivacy.querySelector('.modal-privacy__closeBtn');

openPrivacyBtn.forEach(el => {
  el.addEventListener('click', () => {
    modalPrivacy.showModal();
  });
});
closePrivacyBtn.addEventListener('click', () => {
    modalPrivacy.close();
})