//lodash debounce - otimization for any ativation of the target

function debounce(func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";


// OUR COUMMINTY SECTION AND OUR MENU SECTION ANIMATIONS - JS

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } 
    else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

window.addEventListener(
  "scroll",
  debounce(function () {
    animeScroll();
  }, 200)
);
