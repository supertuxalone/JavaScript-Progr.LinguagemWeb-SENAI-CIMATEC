var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");
    /* Para fazermos essa requisição, 
    temos um objeto bastante conhecido no JS "XMLHttpRequest"*/
    var xhr = new XMLHttpRequest();

    /* abre a função queremos fazer,configurar a requisição com o 
    método .open(), com o método HTTP e o endereço do servidor */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /* Ao escutarmos o evento, carregaremos a resposta da requisição 
    - que no caso, serão nossos dados. Esse evento é o load */
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        //SE ESTIVER STATUS "OK, ENTRA
        if (xhr.status == 200) {
            //erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            /*  console.log(resposta);
             console.log(typeof resposta); */

            //parseando este texto para um objeto Javascript equivalente
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            //SE ESTIVER COM ERRO, REMOVE A CLASSS "INVISIVEL"
            erroAjax.classList.remove("invisivel");
        }

    });

    //para enviar a requisição precisamos chamar o método .send()
    xhr.send();

});