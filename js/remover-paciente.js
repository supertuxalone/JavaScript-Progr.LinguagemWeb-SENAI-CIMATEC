//devemos selecionar as linhas. Todas elas possuem a classe paciente
var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("table"); 

table.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
});
   


/*  cada paciente, adicionaremos um escutador de eventos
 para escutar o evento de duplo clique, o dblclick
 */
/* pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(event) {
        //O this é uma palavra de contexto ligada com quem acionou o evento
        //this.remove();
        event.target.remove();

    });
}); */ 