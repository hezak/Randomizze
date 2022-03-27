
const btnSortear     = document.querySelector(".botaosortear")
const textarea       = document.querySelector("textarea")
const tagresultado   = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar      = document.querySelector(".fechar")


//Pegando dados do formulario
function pegarDadosFormulario(){
//Recuperando valor do campo TEXTAREA
    const valorCampo   = textarea.value
    const listNomes    = valorCampo.split(",")
    const tamanhoArray = listNomes.length 
    const posicaoNome  = gerarNumeroAleatorio(tamanhoArray)
    const nome         = listNomes[posicaoNome]
    mostrarResultado(nome)    
}

function gerarNumeroAleatorio(tamanhoArray){
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0 )

}
function mostrarResultado (nome){
    tagresultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}
function fecharPopUp(){
popUpResultado.classList.remove("mostrarResultado")
}

btnSortear.addEventListener("click", pegarDadosFormulario)
btnFechar.addEventListener("click", fecharPopUp)



