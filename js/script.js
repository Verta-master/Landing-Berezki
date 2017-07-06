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

var s1 = document.querySelector(".certify__img--s1");
var popup = document.querySelector(".modal--s1");
var close = popup.querySelector(".modal__close--s1");
var overlay = document.querySelector(".modal-overlay");

s1.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal__show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
    }
  }
});

var s2 = document.querySelector(".certify__img--s2");
var popup2 = document.querySelector(".modal--s2");
var close2 = popup2.querySelector(".modal__close--s2");

s2.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup2.classList.add("modal__show");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var s3 = document.querySelector(".certify__img--s3");
var popup3 = document.querySelector(".modal--s3");
var close3 = popup3.querySelector(".modal__close--s3");

s3.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup3.classList.add("modal__show");
});

close3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var s4 = document.querySelector(".certify__img--s4");
var popup4 = document.querySelector(".modal--s4");
var close4 = popup4.querySelector(".modal__close--s4");

s4.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup4.classList.add("modal__show");
});

close4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

var s5 = document.querySelector(".certify__img--s5");
var popup5 = document.querySelector(".modal--s5");
var close5 = popup5.querySelector(".modal__close--s5");

s5.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup5.classList.add("modal__show");
});

close5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay-show");
});

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

