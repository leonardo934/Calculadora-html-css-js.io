

let btsomar = document.getElementById("btsomar")


btsomar.addEventListener("click", function () {

    let valor1Soma = document.getElementById("valor1Soma")
    valor1Soma = valor1Soma.value

    let valor2Soma = document.getElementById("valor2Soma")
    valor2Soma = valor2Soma.value
    if (valor1Soma < 0) {
        alert("Não pode colocar Número negativo")
    } else {
        let soma = Number(valor1Soma) + Number(valor2Soma)
        resultadoSoma = document.getElementById("resultadoSoma")
        resultadoSoma.innerHTML = soma
    }
    if (valor1Soma == 0) {
        alert("Não pode ser dividido por 0")
    } else {

    }


})

let btSub = document.getElementById("btSub")

btSub.addEventListener("click", function () {
    let valor1Sub = document.getElementById("valor1Sub")
    valor1Sub = valor1Sub.value

    let valor2Sub = document.getElementById("valor2Sub")
    valor2Sub = valor2Sub.value


    if (valor1Sub < 0) {
        alert("Não pode colocar Número negativo")
    } else {
        let Sub = Number(valor1Sub) - Number(valor2Sub)

        let resultadoSub = document.getElementById("resultadoSub")
        resultadoSub.innerHTML = Sub
    }

    if (valor1Sub == 0) {
        alert("Não pode ser dividido por 0")
    }


})

let btMul = document.getElementById("btMul")

btMul.addEventListener("click", function () {

    let valor1Mul = document.getElementById("valor1Mul")
    valor1Mul = valor1Mul.value

    let valor2Mul = document.getElementById("valor2Mul")
    valor2Mul = valor2Mul.value

    if (valor1Mul < 0) {

        alert("Não pode colocar Número negativo")
    } else {
        let Mul = Number(valor1Mul) * Number(valor2Mul)

        let resultadoMul = document.getElementById("resultadoMul")
        resultadoMul.innerHTML = Mul

    }
})
let btDiv = document.getElementById("btDiv")

btDiv.addEventListener("click", function () {
    let valor1Div = document.getElementById("valor1Div")
    valor1Div = valor1Div.value

    let valor2Div = document.getElementById("valor2Div")
    valor2Div = valor2Div.value


    if (valor1Div < 0) {
        alert("Não pode colocar Número negativo")
    } else {
        let Div = Number(valor1Div) - Number(valor2Div)

        let resultadoDiv = document.getElementById("resultadoDiv")
        resultadoDiv.innerHTML = Div
    }

    if (valor1Div == 0) {
        alert("Não pode ser dividido por 0")
    }


})