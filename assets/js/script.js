'use strict';

// Definition
const loading = document.querySelector('.loading');
const loadingLogo = document.querySelector('.loading__logo');
const scrollTopButton = document.querySelector('.scroll-top');
const subNavButton = document.querySelector('.sub-nav__btn');
const subNav = document.querySelector('.sub-nav');
const flipInElements = document.querySelectorAll('.js-flip-in');
const fadeInElements = document.querySelectorAll('.js-fade-in');
const flipInOpt = {
  root : null,
  rootMargin : "0px 0px -150px 0px",
  threshold: 0
};
const fadeInOpt = {
  root : null,
  rootMargin : "0px",
  threshold: 0.5
};
const flipInObs = new IntersectionObserver(flipIn, flipInOpt);
const fadeInObs = new IntersectionObserver(fadeIn, fadeInOpt);


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

function flipIn(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('js-flip-in--done');
  });
}

function fadeIn(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('js-fade-in--done');
  });
}

// Event
window.addEventListener('load', load);

scrollTopButton.addEventListener('click', scrollBackToTop);

subNavButton.addEventListener('click', subNavTrigger);

flipInElements.forEach(flipInElement => {
  flipInObs.observe(flipInElement);
});

fadeInElements.forEach(fadeInElement => {
  fadeInObs.observe(fadeInElement);
});
