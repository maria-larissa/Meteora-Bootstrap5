const btnAbrirMenu = document.getElementById("btn-abrir-menu");
const btnFecharMenu = document.getElementById("btn-fechar-menu");
const navMenuMobile = document.querySelector(".menu-mobile");

btnAbrirMenu.onclick = function(){
    navMenuMobile.style.display = "flex";
    btnFecharMenu.style.display = "flex";
}

btnFecharMenu.onclick = function(){
    navMenuMobile.style.display = "none";
    btnFecharMenu.style.display = "none";
}



// Banner
const fotoBannerNovidades = document.getElementById("foto-banner");
let i = 0;
let caminhoImagens = ["assets/images/"]
function atualizaFotoBannerNovidades(){
    switch(i){
        case 0:
            fotoBannerNovidades.src = "assests/"
    }
}
