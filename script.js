import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  grabCursor: true,
  freeMode: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // For screens >= 768px
    768: {
        slidesPerView: 1,   // 2 slides per view
        spaceBetween: 20,   // Increase space between slides
    },
    // For screens >= 1024px
    1024: {
        slidesPerView: 3,   // 3 slides per view
        spaceBetween: 30,   // Increase space between slides
    },
},

});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll(".masonry-layout img");

  images.forEach((img) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        transform: "rotate3d(-2, 0, 0, 45deg)",
      },
      {
        opacity: 1,
        duration: 0.4,
        transform: "rotate3d(0, 0, 0, 0)",
        scrollTrigger: {
          trigger: img,
          start: "top 100%",
          end: "top 20%",
          toggleActions: "play none play none",
          markers: false,
          scrub: 0.2,
        },
      }
    );
  });
});
