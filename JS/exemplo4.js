prompt = require("prompt-sync")();

let a = parseFloat(prompt("Informe um valor: "))
let b = parseFloat(prompt("Informe um segundo valor: "))
let calculo = 0

if (a > b){
    calculo = a - b
} else if (b > a){
    calculo = b - a}

console.log("A diferença entre o", a, "e", b, "é", calculo)
