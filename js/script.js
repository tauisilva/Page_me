// hamburger menu

const navMenu = document.querySelector(".nav-menu");
const hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
}));

// hamburger menu

// tema
const html = document.querySelector("html");
const modoClaro = document.querySelector("#modoClaro");
modoClaro.addEventListener("click", () => {
    html.classList.toggle("modoClaro");
    
})
// tema

// trocar imagem
var imgwhite = "../img/projetos/paginadedemonstracaowhite.png";
var imgblack = "../img/projetos/paginadedemonstracao.png";

const trocaImg = document.querySelector(".trocaImg");
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

// trocar imagem

// modal login

const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.open-modal');
const container = getElement('.modal-container');
const modal = getElement('.modal');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});

// modal login