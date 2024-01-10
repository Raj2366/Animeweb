burger = document.querySelector('.burger')
box = document.querySelector('.box')
boxes = document.querySelector('.boxes')
search = document.querySelector('.search')

burger.addEventListener('click',()=> {
    search.classList.toggle('v-class');
    boxes.classList.toggle('v-class');
    box.classList.toggle('h-nav');
})



const searchText = document.getElementById("find");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    //var a= prompt("Enter the anime name");
    var query = searchText.value;
    query = query.replace(/\s/g, '+');
    
    var fetch = 'https://9anime.pe/search?keyword=' + query;
    open(fetch);
    
});

