//queremos detectar o evento de digitar, conhecido como input de dados.
var campoFiltro = document.querySelector("#filtrar-tabela");

// responsável por detectar quando o usuário começar a digitar
campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    //todos os pacientes da tabela 
    var pacientes = document.querySelectorAll(".paciente");

    /* selecionaremos o paciente, e a partir dele a td com a 
    classe info-nome. Daí, extrairemos o nome do paciente 
    será esconder todos elementos diferentes do valor do campo de texto (this.value) e 
    mostrar os que forem iguais. Para conseguirmos esconder e mostrar*/
    if (this.value.length > 0) {
        //se tiver algo digitado execute o for abaixo    
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
                            //expressões regulares, "i" para indicar que estamos buscando por case-insensitive
            var expressao = new RegExp(this.value, "i");
            
            // testando se o nome não contém a expressão
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
        //se não haver nada digitado, percorreremos todos os pacientes e removeremos a classe  
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});