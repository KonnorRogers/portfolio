
// Select DOM items
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");
const menuBranding = document.querySelector("#menu-branding");
const navItems = document.querySelectorAll(".nav-item");


// toggles the hamburger icon
function toggleMenu() {
  const menuItems = [menu, menuNav, menuBranding];

  menuBtn.classList.toggle('rotate-menu');

  menuItems.forEach((item) => {
    item.classList.toggle('hidden');
  });

  navItems.forEach((item) => { item.classList.toggle('hidden') });
};

// Adds hidden class to the given element
function toggleHidden(element) {
  element.classList.toggle('hidden');
};

menuBtn.addEventListener("click", toggleMenu);
