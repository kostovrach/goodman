window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const xsSource = document.querySelector('.header__logo--xs');
  
  if (window.scrollY > 10) {
    header.classList.add('sticky');
    xsSource.setAttribute('media', '(max-width: 99999px)');
  } else {
    header.classList.remove('sticky');
    xsSource.setAttribute('media', '(max-width: 1100px)');
  }
});