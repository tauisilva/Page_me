const modoClaro = document.querySelector("#modoClaro");
const html  = document.querySelector("html");

modoClaro.addEventListener("click", () =>{
    html.classList.toggle("modoClaro");
})