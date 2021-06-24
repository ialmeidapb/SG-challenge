document.querySelector(".slider-recipes").addEventListener('wheel', function scroll(event){
    if(event.deltaY>0){
        event.target.scrollBy(300, 0)
    }else{
        event.target.scrollBy(-300, 0)
    }
})