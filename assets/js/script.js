'use strict';

// Definition
const loading = document.querySelector('.loading');
const loadingLogo = document.querySelector('.loading__logo');
const scrollTopButton = document.querySelector('.scroll-top');
const subNavButton = document.querySelector('.sub-nav__btn');
const subNav = document.querySelector('.sub-nav');
const images = document.querySelectorAll('.js-fade-in-slide');
const options = {
  root : null,
  rootMargin : "0px",
  threshold: 1.0
};
const observer = new IntersectionObserver(fadeInSlide, options);


// Function
function load() {
  loading.classList.add('loading--done');
}

function scrollBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function subNavTrigger() {
  subNav.classList.toggle('sub-nav--active');
}

function fadeInSlide(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('js-fade-in-slide--done');
  });
}


// Event
window.addEventListener('load', load);
scrollTopButton.addEventListener('click', scrollBackToTop);
subNavButton.addEventListener('click', subNavTrigger);
images.forEach(image => {
  observer.observe(image);
});
