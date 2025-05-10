
// slider section
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
//slider sections end

//how it works
function activateCard(cardId) {
    const allBoxes = document.querySelectorAll('.highlighted-card-box');
    allBoxes.forEach((box, index) => {
      const card = box.querySelector('.highlighted-card');
      if ((index + 1) === cardId) {
        card.classList.add('active-highlighted');
      } else {
        card.classList.remove('active-highlighted');
      }
    });
  }
  //how it works
  