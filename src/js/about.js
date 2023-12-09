// to do
// fix cliend-navs
// make image slider
const track = document.querySelector(".client-track");
const slides = Array.from(track.children);

// if right btn is clicked, move 1 number up
// if left btn is clicked, check to see if the previous num is negative, if not move 1 num down
// use transition

const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");

const moveToRight = function () {
  // what slide are we on?
  const currentSlide = track.querySelector(".current-slide");
  // find index of in slides
  const currentIndex = slides.indexOf(currentSlide);
  currentSlide.classList.remove("current-slide");
  currentSlide.classList.add("client-hidden");

  const nextIndex = currentIndex + 1;
  if (slides[nextIndex] == undefined) {
    currentSlide.classList.remove("client-hidden");
    currentSlide.classList.add("current-slide");
  } else {
    slides[nextIndex].classList.remove("client-hidden");
    slides[nextIndex].classList.add("current-slide");
    console.log("done");
  }
};
const moveToLeft = function () {
  // what slide are we on?
  const currentSlide = track.querySelector(".current-slide");
  // find index of in slides
  const currentIndex = slides.indexOf(currentSlide);
  currentSlide.classList.remove("current-slide");
  currentSlide.classList.add("client-hidden");

  const nextIndex = currentIndex - 1;
  if (slides[nextIndex] == undefined) {
    currentSlide.classList.remove("client-hidden");
    currentSlide.classList.add("current-slide");
  } else {
    slides[nextIndex].classList.remove("client-hidden");
    slides[nextIndex].classList.add("current-slide");
    console.log("done");
  }
};
sliderBtnLeft.addEventListener("click", moveToLeft);
sliderBtnRight.addEventListener("click", moveToRight);
// navigations
const sliderNavCont = document.querySelector(".slider-nav-cont");
const navs = Array.from(sliderNavCont.children);
console.log(navs);

const moveNav = function (e) {
  // find current nav index
  const currentSlide = track.querySelector(".current-slide");
  const slideIndex = slides.indexOf(currentSlide);
  const currentNav = sliderNavCont.querySelector(".current-slide");
  console.log(slideIndex);
  const clickedNav = e.target.closest("button");
  const navIndex = navs.indexOf(clickedNav);
  console.log(navIndex);
  // use index for slides
  slides[slideIndex].classList.remove("current-slide");
  slides[slideIndex].classList.add("client-hidden");
  slides[navIndex].classList.remove("client-hidden");
  slides[navIndex].classList.add("current-slide");
  // add current-slide to nav
  currentNav.classList.remove("current-slide");
  clickedNav.classList.add("current-slide");
};
navs.forEach((nav) => nav.addEventListener("click", moveNav));
