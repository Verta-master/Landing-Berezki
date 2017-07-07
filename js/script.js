var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__toggle");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
  }
});

var overlay = document.querySelector(".modal-overlay");
var tour = document.querySelector(".promo__link");
var popup6 = document.querySelector(".modal--tour");
var close6 = popup6.querySelector(".modal__close--tour");

tour.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup6.classList.add("modal__show");
});

close6.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var video = document.querySelector(".benefits__btn--up");
var popup7 = document.querySelector(".modal--video");
var close7 = popup7.querySelector(".modal__close--video");

video.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup7.classList.add("modal__show");
});

close7.addEventListener("click", function(event) {
  event.preventDefault();
  popup7.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var consult = document.querySelector(".btn--consult");
var popup8 = document.querySelector(".modal--consult");
var close8 = popup8.querySelector(".modal__close--consult");

consult.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup8.classList.add("modal__show");
});

close8.addEventListener("click", function(event) {
  event.preventDefault();
  popup8.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var book = document.querySelector(".btn--book");
var popup9 = document.querySelector(".modal--book");
var close9 = popup9.querySelector(".modal__close--book");

book.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup9.classList.add("modal__show");
});

close9.addEventListener("click", function(event) {
  event.preventDefault();
  popup9.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var price = document.querySelector(".price__link");
var popup10 = document.querySelector(".modal--price");
var close10 = popup10.querySelector(".modal__close--price");

price.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup10.classList.add("modal__show");
});

close10.addEventListener("click", function(event) {
  event.preventDefault();
  popup10.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var price2 = document.querySelector(".price__link--2");
var popup11 = document.querySelector(".modal--price2");
var close11 = popup11.querySelector(".modal__close--price2");

price2.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup11.classList.add("modal__show");
});

close11.addEventListener("click", function(event) {
  event.preventDefault();
  popup11.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var room = document.querySelector(".rooms__btn");
var popup12 = document.querySelector(".modal--room1");
var close12 = popup12.querySelector(".modal__close--room1");

room.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup12.classList.add("modal__show");
});

close12.addEventListener("click", function(event) {
  event.preventDefault();
  popup12.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var room2 = document.querySelector(".rooms__btn--2");
var popup13 = document.querySelector(".modal--room2");
var close13 = popup13.querySelector(".modal__close--room2");

room2.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup13.classList.add("modal__show");
});

close13.addEventListener("click", function(event) {
  event.preventDefault();
  popup13.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var book2 = document.querySelector(".benefits__btn--book2");
var popup14 = document.querySelector(".modal--book2");
var close14 = popup14.querySelector(".modal__close--book2");

book2.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup14.classList.add("modal__show");
});

close14.addEventListener("click", function(event) {
  event.preventDefault();
  popup14.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var book3 = document.querySelector(".response__link");
var popup15 = document.querySelector(".modal--book3");
var close15 = popup15.querySelector(".modal__close--book3");

book3.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup15.classList.add("modal__show");
});

close15.addEventListener("click", function(event) {
  event.preventDefault();
  popup15.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var phone = document.querySelector(".footer-main__link");
var popup16 = document.querySelector(".modal--phone");
var close16 = popup16.querySelector(".modal__close--phone");

phone.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup16.classList.add("modal__show");
});

close16.addEventListener("click", function(event) {
  event.preventDefault();
  popup16.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

