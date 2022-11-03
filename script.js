const body = document.querySelector(".body");
const header = document.querySelector(".header");
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".icon");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});
icon.addEventListener("click", () =>{
    body.classList.toggle('dark');
    header.classList.toggle('dark');
});
