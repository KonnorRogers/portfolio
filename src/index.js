// Allows you to import a whole directory
function importAll(r) {
  r.keys().forEach(r);
};
// import all images
importAll(require.context('./img/', true, /\.jpg$/));

import './styles.css';

// Select DOM items
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");
const menuBranding = document.querySelector("#menu-branding");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);

// toggles the hamburger icon
function toggleMenu() {
  const menuItems = [menu, menuNav, menuBranding];

  menuBtn.classList.toggle('rotate-menu');

  menuItems.forEach((item) => {
    item.classList.toggle('hidden');
  });

  navItems.forEach((item) => { item.classList.toggle('hidden') });
};

function toggleHidden(item) {
  item.classList.toggle('hidden');
};
