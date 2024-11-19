
let imagens = document.querySelectorAll('.animada');


imagens.forEach(imagem => {
    imagem.onmouseover = function () {
        imagem.classList.add("animacao");
    };


    imagem.onmouseout = function () {
        imagem.classList.remove("animacao");
    };
});


let imagemPrincipal = document.getElementById("minhaImagem");

imagemPrincipal.onmouseover = function () {
    imagemPrincipal.classList.add("animacao");
};


imagemPrincipal.onmouseout = function () {
    imagemPrincipal.classList.remove("animacao");
};
