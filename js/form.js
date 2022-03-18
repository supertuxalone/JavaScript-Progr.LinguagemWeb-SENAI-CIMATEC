//EVENTO DE QUE ESCUTA OS CLIQUES NO BOTÃO ADICIONAR DO HTML
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  // acessar o valor de um campo em JavaScript, utilizaremos a propriedade value
  var paciente = obtemPacienteDoFormulario(form);

  if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
  }
  //Criando um elemento HTML com JavaScript
  var pacientetr = montatr(paciente);
  var erros = validaPaciente(paciente);
  /* Se o tamanho da String for maior que 0, 
  significa que ocorreu algum erro. */
  if (erros.length > 0){
    exibiMensagemErro(erros);
    return;
  }

  //colocarmos ele dentro da tabela
  var tabela = document.querySelector("#tabela-pacientes");

  //selecionar a tabela e adicionar a tr usando o appendChild
  tabela.appendChild(pacientetr);

  form.reset();
});

function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montatr(paciente) {
  //criar um paciente, vamos criar uma nova tr
  var pacientetr = document.createElement("tr");
  pacientetr.classList.add("paciente");

  //Utilizando o JavaScript para adicionar um elemento dentro de outro

  //criar um elemento, podemos criar as td s
  //cada td dentro da tr usando appendChild
  pacientetr.appendChild(montatd(paciente.nome, "info-nome"));
  pacientetr.appendChild(montatd(paciente.peso, "info-peso"));
  pacientetr.appendChild(montatd(paciente.altura, "info-altura"));
  pacientetr.appendChild(montatd(paciente.gordura, "info-gordura"));
  pacientetr.appendChild(montatd(paciente.imc, "info-imc"));

  return pacientetr;
}

function montatd(dado, classe) {
  var td = document.createElement("td");
  // na tr. Vamos por passos, primeiro colocando os dados dentro das tds
  td.textContent = dado;
  td.classList.add(classe);

  return td;

}

function validaPaciente(paciente) {

  var erros = [];

  /* Apenas no caso do peso não ser válido, 
  o erro.push() será adicionado. */
  if (!validaPeso(paciente.peso)) {
      erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
      erros.push("Altura é inválida");
  }

  return erros;
}

function exibiMensagemErro(erros){

  /* o qual não precisamos delimitar,
   e que passará por todos os elementos */
  var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}


//mesma função porem mais legivel
/* function validaPaciente(paciente) {

  var erros = [];

  if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

  if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  return erros;
} */