const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";
const animationClassPassed = "animate-passed"

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    }
 

    console.log(element.offsetTop);
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});

