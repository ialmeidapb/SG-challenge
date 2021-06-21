let firstCard = document.getElementById('firstCard');
let secondCard = document.getElementById('secondCard');
let thirdCard = document.getElementById('thirdCard');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    firstCard.style.right = value * 1.05 + 'px';
});