var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida a Nutricionista";

//códigos exibe o mesmo resultado
var titulo = document.querySelector("#botao-adicionar");
titulo.addEventListener("click", function(){
  console.log("Fui clicado");
});

//captura no documento a classe .paciente e jogar em result
var result = document.querySelectorAll(".paciente");

//atraves do for vare os resultados obtidos
for (var i = 0; i < result.length; i++) {
  //console.log(result.length); = 5
  var paciente = result[i];
  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var imclinha = paciente.querySelector(".info-imc");

  var pesoValidade = true;
  var alturaValidade = true;

  //CONDICIONAMENTO DE PESO E ALTURA, PARQ QUE ASSIM POSSA CALCULAR O IMC
  if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido");
    pesoValidade = false;
    imclinha.textContent = "Inválido";
    imclinha.style.color = "red";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Invalida");
    alturaValidade = false;
    imclinha.textContent = "Inválida";
    imclinha.style.color = "red";
    paciente.classList.add("paciente-invalido");
  }

  //CALCULAR O IMC
  if (pesoValidade && alturaValidade) {
    var imc = calculaImc(peso, altura);
    imclinha.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

//EVENTO DE CLIQUE
/* titulo.addEventListener("click", mostraMesagem);
function mostraMesagem(){
  console.log("Clicou na Mensagem");
} */

//EVENTO DE QUE ESCUTA OS CLIQUES NO BOTÃO ADICIONAR DO HTML
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  //função faz exatamente o que seu nome diz, prevenindo o comportamento padrão do evento
  event.preventDefault();
  console.log("Botão acionado");
});

/* ###################################################################################
 *//* 
 //MARIA
 var botao = document.querySelector('#adicionar-paciente');

 function botaoHandler() {

     alert('Botão clicado');
 } */
//Como a função não retorna nada, o código que será executado será igual a nada quando o botão for clicado
//botao.addEventListener('click', botaoHandler);

/* ###########################################################################*/
//COPIAR O CONTEUDO DO IMPUT E COLAR NO SPAN
/* var inputFrase = document.querySelector(".frase");
var botao = document.querySelector(".botao");
var copia = document.querySelector(".copia");

function botaoHandler() {
  // não sabe o que fazer aqui!
  copia.textContent = inputFrase.valeu;
  // inputFrase.textContent = '';
}
botao.addEventListener("click", botaoHandler); */

/*###########################################################################
  JESSICA QUE ADICIONAR SUAS TAREFAS
*/





