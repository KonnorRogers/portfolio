
// Select DOM items
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");
const menuBranding = document.querySelector("#menu-branding");
const navItems = document.querySelectorAll(".nav-item");


// toggles the hamburger icon
function toggleMenu() {
  // menuNav.classList.toggle('translate3d-0-0-0');
  const menuItems = [menu, menuNav, menuBranding];

  // For handling transforms, hacky workaround
  menuBtn.classList.toggle('rotate-menu');

  menuItems.forEach((item) => {
    toggleVisibility(item);
  });

  navItems.forEach((item) => { toggleVisibility(item) });
};

// Adds hidden class to the given element
function toggleVisibility(element) {
  element.classList.toggle('visible');
  element.classList.toggle('invisible');
};

menuBtn.addEventListener("click", toggleMenu);
