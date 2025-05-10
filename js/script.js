var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2, // tablets
      },
      1024: {
        slidesPerView: 3, // tab pro & small laptops
      },
      1366: {
        slidesPerView: 4, // full desktop
      },
    },
  });
  