var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida a Nutricionista";

//captura no documento a classe .paciente e jogar em result
var result = document.querySelectorAll(".paciente");

//atraves do for vare os resultados obtidos
for (var i = 0; i < result.length; i++) {
  var paciente = result[i];
 // var paciente = document.querySelector(".paciente");
  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var imclinha = paciente.querySelector(".info-imc");

  var pesoValidade = true;
  var alturaValidade = true;

  if ((peso <= 0 || peso >= 1000)) {
    console.log("Peso Inválido");
    pesoValidade = false;
    imclinha.textContent = "Inválido";
  }

  if ((altura <= 0 || altura >= 3,00)) {
    console.log("Altura Invalida");
    alturaValidade = false;
    imclinha.textContent = "Inválida";
  }

  if (pesoValidade && alturaValidade) {
    var imc = peso / (altura * altura);
    imclinha.textContent = imc.toFixed(2);
  }
}
