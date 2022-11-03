const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

const modoEscuro = document.querySelector("#modoEscuro");
const html  = document.querySelector("html");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

modoEscuro.addEventListener("click", () =>{

    html.classList.toggle("modoEscuro");
});

