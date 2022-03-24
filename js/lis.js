
var lis = document.querySelectorAll('li');

for (var i = 0; i < lis.length; i++) {

    // ela deseja exibir o conteúdo da li no clique
    lis[i].addEventListener("click", function () {
        alert(this.textContent);
    });
}

var botao = document.querySelector('#botao');
var input = document.querySelector('#campo');
var lista = document.querySelector('.lista');

botao.addEventListener('click', function () {

    var li = document.createElement('li');
    li.textContent = input.value;
    lista.appendChild(li);
});
