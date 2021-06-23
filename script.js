//SMOOTH SCROLL JS

const menuItems = document.querySelectorAll('.navbar a[href^="#"]');


menuItems.forEach(item=>{
    item.addEventListener('click', scrollToIdOnClick);
})


//function to get references

function scrollToIdOnClick(event){
    event.preventDefault();
    const to= getScrollTopByHref(event.target)
    

   scrollToPosition(to);

}


// function to deal with the click on the navbar

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop

}

// smooth scroll function

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

//----------------------------------------------------

//SECTIONS ANIMATIONS


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
