const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const modoClaro = document.querySelector("#modoClaro");
const trocaImg = document.querySelector(".trocaImg");
const html = document.querySelector("html");

var imgwhite = "../img/projetos/paginadedemonstracaowhite.png";
var imgblack = "../img/projetos/paginadedemonstracao.png";

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
}));

modoClaro.addEventListener("click", () => {
    html.classList.toggle("modoClaro");

})
trocaImg.addEventListener("click", () => {

    document.getElementById("demonstracaoIM").src = imgwhite;
    let aux = imgwhite;
    imgwhite = imgblack;
    imgblack = aux;
})
function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mostrar");
    var bntLeiaMais = document.getElementById("bntLeiaMais");
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        bntLeiaMais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        bntLeiaMais.innerHTML = "Leia Menos";
    }
}