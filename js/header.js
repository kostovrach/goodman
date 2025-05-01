// const header = document.querySelector('.header');
// const logoPicture = header.querySelector('.header__logo-container');
// const logoImg = logoPicture.querySelector('.header__logo--xl');
// const logoSrc = logoPicture.querySelector('.header__logo--xs');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 10) {
//         header.classList.add('sticky');
        
//         logoImg.src = ".\media\icons\logo-xs.svg";
//     } else {
//         header.classList.remove('sticky');
        
//         logoImg.src = ".\media\icons\logo-xl.svg";
//         logoSrc.srcset = ".\media\icons\logo-xs.svg";
//     }
// });

const header = document.querySelector('.header');
const logoContainer = header.querySelector('.header__logo-container');
const logoSrc = logoContainer.querySelector('.header__logo--xs'); // <source>
const logoImg = logoContainer.querySelector('.header__logo--xl'); // <img>

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('sticky');
        logoImg.classList.add('header__logo--hidden'); // Скрываем XL лого
        logoSrc.setAttribute('media', 'all'); // Игнорируем медиа-запрос, показываем XS
    } else {
        header.classList.remove('sticky');
        logoImg.classList.remove('header__logo--hidden'); // Показываем XL лого
        logoSrc.setAttribute('media', '(max-width: 1100px)'); // Возвращаем медиа-запрос
    }
});