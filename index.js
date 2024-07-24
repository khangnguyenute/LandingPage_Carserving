const menuBtn = document.getElementById("nav-menu");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpened = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpened ? "ri-close-large-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// SCROLL REVEAL
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", { ...scrollRevealOptions });
ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// SWIPER
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
