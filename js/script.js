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

/*cards slider*/
 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });