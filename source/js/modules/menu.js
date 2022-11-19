const headerNav = document.querySelector('.header__nav');
const headerButton = document.querySelector('.header__button');
const navLinks = document.querySelectorAll('.nav__link');

headerNav.classList.remove('header__nav--nojs');

function toggleMenu() {
  headerNav.classList.toggle('header__nav--open');

  if (headerNav.classList.contains('header__nav--open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
}

function openMenu() {
  headerButton.addEventListener('click', toggleMenu);
  navLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });
}

export {openMenu};

