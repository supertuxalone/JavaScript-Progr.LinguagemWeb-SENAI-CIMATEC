var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");
    /* Para fazermos essa requisição, 
    temos um objeto bastante conhecido no JS */
    var xhr = new XMLHttpRequest();

    //abre a função queremos fazer
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /* Ao escutarmos o evento, carregaremos a resposta da requisição 
    - que no caso, serão nossos dados. Esse evento é o load */
    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
       /*  console.log(resposta);
        console.log(typeof resposta); */

        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();

});