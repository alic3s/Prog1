// IMPORTANDO A BIBLIOTECA PROMPT

prompt = require('prompt-sync')();

let v1 = 10
let v2 = 25
let soma = 0

// OBTENDO OS VALORES VIA TECLADO
console.clear()
console.log("Obtendo os valores de V1 e V2")
v1 = parseInt(prompt("V1: "))
v2 = parseInt(prompt("V2: "))
soma = v1 + v2
console.log("V1:", v1)
console.log("V2:", v2)
console.log(v1, "+" ,v2, " = ",soma)
