function buscaElement(seletor) {
    return document.querySelector(seletor);
}

function aplicaTabuada(numero, tabuada) {
    return numero * tabuada;
}

var botao = buscaElement('.botaocal');
var numero = buscaElement('.numerocal');
var tabuada = buscaElement('.tabuadacal');
var resultado = buscaElement('.resultadocal');

botao.addEventListener('click', function () {

    resultado.textContent = aplicaTabuada(numero.value, tabuada.value);

});