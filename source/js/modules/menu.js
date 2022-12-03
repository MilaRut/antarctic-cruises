import {FocusLock} from '../utils/focus-lock';
import {ScrollLock} from '../utils/scroll-lock';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const headerNav = document.querySelector('.header__nav');
const headerButton = document.querySelector('.header__button');
const navLinks = headerNav.querySelectorAll('.nav__link');
const headerButtonNoJs = document.querySelector('.header__label');
const overlay = document.querySelector('.header__overlay');

headerButton.classList.remove('no-js');
headerButtonNoJs.classList.remove('no-js');

function toggleMenu() {
  headerNav.classList.toggle('header__nav--open');

  if (headerNav.classList.contains('header__nav--open') && screen.width < 768) {
    scrollLock.disableScrolling();
    overlay.classList.add('header__overlay--open');
    focusLock.lock('.header');
  } else {
    scrollLock.enableScrolling();
    overlay.classList.remove('header__overlay--open');
    focusLock.unlock();
  }
}

function openMenu() {
  headerButton.addEventListener('click', toggleMenu);
}

function closeMenu() {
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      if (screen.width < 768) {
        scrollLock.enableScrolling();
        overlay.classList.remove('header__overlay--open');
        headerNav.classList.remove('header__nav--open');
      }
    });
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target === headerNav || headerNav.contains(target);
    const itsBtnMenu = target === headerButton;
    const navIsOpen = headerNav.classList.contains('header__nav--open');

    if (!itsMenu && !itsBtnMenu && navIsOpen) {
      toggleMenu();
    }
  });
}

export {openMenu, closeMenu};
