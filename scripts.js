
//isso aqui pega o botão "somar"
let btsomar = document.getElementById("btsomar")

// isso aqui pega a ação do botão 
btsomar.addEventListener("click", function () {

    //----------------------------------
    //isso aqui pega o valor do input 1
    let valor1Soma = document.getElementById("valor1Soma")
    valor1Soma = valor1Soma.value
    //----------------------------------

    //----------------------------------
    //isso aqui pega o valor do input 1
    let valor2SomaSoma = document.getElementById("valor2Soma")
    valor2Soma = valor2Soma.value
    //----------------------------------

    //----------------------------------
    // isso aqui faz a soma
    let soma = Number(valor1Soma) + Number(valor2Soma)
    //----------------------------------


    //----------------------------------
    // isso aqui faz aparecer depois do igual(=) na tela
    let resultadoSoma = document.getElementById("resultadoSoma")
    resultadoSoma.innerHTML = soma
    //----------------------------------
})

let btSub = document.getElementById("btSub")

btSub.addEventListener("click", function () {
    let valor1Sub = document.getElementById("valor1Sub")
    valor1Sub = valor1Sub.value

    let valor2Sub = document.getElementById("valor2Sub")
    valor2Sub = valor2Sub.value

    let Sub = Number(valor1Sub) - Number(valor2Sub)

    let resultadoSub = document.getElementById("resultadoSub")
    resultadoSub.innerHTML = Sub

})

let btMul = document.getElementById("btMul")

btMul.addEventListener("click", function () {

    let valor1Mul = document.getElementById("valor1Mul")
    valor1Mul = valor1Mul.value

    let valor2Mul = document.getElementById("valor2Mul")
    valor2Mul = valor2Mul.value

    let Mul = Number(valor1Mul) * Number(valor2Mul)

    let resultadoMul = document.getElementById("resultadoMul")
    resultadoMul.innerHTML = Mul
    
})

let btDiv = document.getElementById("btDiv")

btDiv.addEventListener("click", function () {

    let valor1Div = document.getElementById("valor1Div")
    valor1Div = valor1Div.value

    let valor2Div = document.getElementById("valor2Div")
    valor2Div = valor2Div.value

    let Div = Number(valor1Div) / Number(valor2Div)

    let resultadoDiv = document.getElementById("resultadoDiv")
    resultadoDiv.innerHTML = Div

})








