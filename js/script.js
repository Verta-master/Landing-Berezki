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

s1.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal__show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
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
  popup2.classList.add("modal__show");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("modal__show");
});

var s3 = document.querySelector(".certify__img--s3");
var popup3 = document.querySelector(".modal--s3");
var close3 = popup3.querySelector(".modal__close--s3");

s3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.add("modal__show");
});

close3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.remove("modal__show");
});

var s4 = document.querySelector(".certify__img--s4");
var popup4 = document.querySelector(".modal--s4");
var close4 = popup4.querySelector(".modal__close--s4");

s4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.add("modal__show");
});

close4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.remove("modal__show");
});

var s5 = document.querySelector(".certify__img--s5");
var popup5 = document.querySelector(".modal--s5");
var close5 = popup5.querySelector(".modal__close--s5");

s5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.add("modal__show");
});

close5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.remove("modal__show");
});

var tour = document.querySelector(".promo__link");
var popup6 = document.querySelector(".modal--tour");
var close6 = popup6.querySelector(".modal__close--tour");

tour.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.add("modal__show");
});

close6.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.remove("modal__show");
});

var video = document.querySelector(".benefits__btn--up");
var popup7 = document.querySelector(".modal--video");
var close7 = popup7.querySelector(".modal__close--video");

video.addEventListener("click", function(event) {
  event.preventDefault();
  popup7.classList.add("modal__show");
});

close7.addEventListener("click", function(event) {
  event.preventDefault();
  popup7.classList.remove("modal__show");
});