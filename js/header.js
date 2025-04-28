const header = document.querySelector('.header');
const logoPicture = header.querySelector('.header__logo-container');
const logoImg = logoPicture.querySelector('.header__logo-xl');
const logoSrc = logoPicture.querySelector('.header__logo-xs');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('sticky');
        
        logoImg.src = "media/icons/logo-xs.svg";
    } else {
        header.classList.remove('sticky');
        
        logoImg.src = "media/icons/logo-xl.svg";
        logoSrc.srcset = "media/icons/logo-xs.svg";
    }
});