const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".orange-slice__nav-mob");

nav.classList.remove("orange-slice__nav-mob--active");

burger.addEventListener("click", function (e) {
  nav.classList.toggle("orange-slice__nav-mob--active");
});
