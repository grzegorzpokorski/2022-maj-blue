const menu = document.getElementById("menu");
const menuOpener = document.getElementById("menu-opener");

menuOpener.addEventListener("click", (e) => {
  menu.classList.toggle("navbar__menu--open");
  menuOpener.classList.toggle("navbar__opener--open");
});
