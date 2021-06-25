
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
        top: to + 10,
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


// OUR COUMMINTY SECTION AND OUR MENU SECTION ANIMATIONS - JS

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";



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


//----------------------------------------------

// SCROLL SPY - JS



window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`.section-nav a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`.section-nav a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});




//----------------------------
// POPULAR RECIPES SECTION SLIDE - JS (*to improve)


document.querySelector(".slider-recipes").addEventListener('wheel', function scroll(event){
  if(event.deltaY>0){
      event.target.scrollBy(300, 0)
  }else{
      event.target.scrollBy(-300, 0)
  }
})




