//EVENTO DE QUE ESCUTA OS CLIQUES NO BOTÃO ADICIONAR DO HTML
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  // acessar o valor de um campo em JavaScript, utilizaremos a propriedade value
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  //Criando um elemento HTML com JavaScript

  //criar um paciente, vamos criar uma nova tr
  var pacientetr = document.createElement("tr");

  //criar um elemento, podemos criar as td s
  var nometd = document.createElement("td");
  var pesotd = document.createElement("td");
  var alturatd = document.createElement("td");
  var gorduratd = document.createElement("td");
  var imctd = document.createElement("td");

  // na tr. Vamos por passos, primeiro colocando os dados dentro das tds
  nometd.textContent = nome;
  pesotd.textContent = peso;
  alturatd.textContent = altura;
  gorduratd.textContent = gordura;
  imctd.textContent = calculaImc(peso,altura);

  //Utilizando o JavaScript para adicionar um elemento dentro de outro

  //cada td dentro da tr usando appendChild
  pacientetr.appendChild(nometd);
  pacientetr.appendChild(pesotd);
  pacientetr.appendChild(alturatd);
  pacientetr.appendChild(gorduratd);
  pacientetr.appendChild(imctd);

  //colocarmos ele dentro da tabela
  var tabela = document.querySelector("#tabela-pacientes");

  //selecionar a tabela e adicionar a tr usando o appendChild
  tabela.appendChild(pacientetr); 
});
