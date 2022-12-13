const list = document.querySelector(".list");
const openMenuBtn = document.querySelector(".nav__icon--menu");
const closeMenuBtn = document.querySelector(".nav__icon--close");


function toggleMenu(){
    list.classList.toggle("list_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
