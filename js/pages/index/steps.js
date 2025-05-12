const spoilerItems = document.querySelectorAll('.steps__spoiler-item');

spoilerItems.forEach(item => {
  const preview = item.querySelector('.steps__spoiler-item-preview');

  preview.addEventListener('click', () => {
    spoilerItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});