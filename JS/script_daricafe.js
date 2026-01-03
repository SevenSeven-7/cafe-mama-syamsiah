// TOGGLE CLASS ACTIVE UNTUK HAMBURGER MENU
const navbarNav = document.querySelector('.navbar-nav');

// KETIKA HAMBURGER MENU DI KLIK
document.querySelector('#hamburger-menu').onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle('active');
};

// KLIK DI LUAR SIDEBAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});