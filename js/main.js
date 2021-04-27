/*
Exercício
Pegar a imagem no input, clicar no botão e colocar em lista. Usar funções
1. Obter o texto no input
2. Validar se é um trailer (um video)
3. Listar o conteúdo abaixo
Desafios
Paulo: colocar o "embed" (o trailer) do filme em vez da imagem
Rafa: o que é o innerHTML? o que ele faz?
Gui: transportar a validação de .jpg para uma função
*/

var trailer,listaFilmes,classeFilme
var arrayFilme = []


function adicionarTrailer(){
    trailer = document.querySelector("#filme").value
    console.log(trailer.substring(0, 24))
    console.log(trailer.substring(32,42))
    arrayFilme = [trailer.substring(0, 24), trailer.substring(32)]
    validarTrailer(trailer)
}

function validarTrailer(trailer){
    if(trailer.includes('https://www.youtube.com/watch?v=')){
        exibirTrailer(trailer)
    } else{
        alert("Deve ser um video do Youtube!")
        trailer = ""
    }
}

function exibirTrailer(trailer){
    listaFilmes = document.querySelector("#listaFilmes")
    classeFilme = "<iframe width='280' height='220' src='" + arrayFilme[0] + "embed/" + arrayFilme[1] + "' title='YouTube video player'></iframe>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + classeFilme
}     