prompt = require("prompt-sync")();

let a = parseFloat(prompt("Valor de A: "))
let b = parseFloat(prompt("Valor de B: "))
let c = parseFloat(prompt("Valor de C: "))

let maior = a

if (b > maior){
    maior = b
} else if (c > maior){
    maior = c
}

console.log("O maior valor é", maior)
