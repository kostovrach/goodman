const textSliderParams = {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    freeMode: {
      enabled: true,
    },
    // mousewheel: {
    //   enabled: true,
    // },
}

new Swiper('.benefits__slider', textSliderParams)
new Swiper('.ideas__slider', textSliderParams)