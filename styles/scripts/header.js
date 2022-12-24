const headerLogo = document.querySelector(".header__logo");
const headerMenu = document.querySelector(".header__menu");
const headerOpenButton = document.querySelector(".header__open-button");
const headerCloseButton = document.querySelector(".header__close-button");
const logoHeader = document.querySelector(".header__logo");

logoHeader.addEventListener("mouseover", function () {
  logoHeader.classList.add("rotation");
});

logoHeader.addEventListener("mouseout", function () {
  logoHeader.classList.remove("rotation");
});

headerOpenButton.addEventListener("click", function () {
  headerLogo.classList.add("header__logo_closed");
  headerMenu.classList.add("header__menu_opened");
  headerCloseButton.classList.add("header__close-button_opened");
  headerOpenButton.classList.add("header__open-button_closed");
});

headerCloseButton.addEventListener("click", function () {
  headerLogo.classList.remove("header__logo_closed");
  headerMenu.classList.remove("header__menu_opened");
  headerCloseButton.classList.remove("header__close-button_opened");
  headerOpenButton.classList.remove("header__open-button_closed");
});
