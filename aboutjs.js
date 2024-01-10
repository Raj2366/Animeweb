burger = document.querySelector('.burger')
box = document.querySelector('.box')
boxes = document.querySelector('.boxes')
search = document.querySelector('.search')

burger.addEventListener('click',()=> {
    search.classList.toggle('v-class');
    boxes.classList.toggle('v-class');
    box.classList.toggle('h-nav');
})
