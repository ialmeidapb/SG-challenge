//lodash debounce for otimization of the ativation of the target

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
const animationClassPassed = "animate-passed";

// OUR COUMMINTY AND OUR MENU ANIMATIONS JS CODE

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
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
