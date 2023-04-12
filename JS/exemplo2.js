// IMPORTANDO A BIBLIOTECA PROMPT

prompt = require('prompt-sync')();

let a = 0
let b = 0
let area = 0

// OBTENDO OS VALORES VIA TECLADO
console.clear()
console.log("Obtendo os valores de A e B")
a = parseInt(prompt("Lado A: "))
b = parseInt(prompt("Lado B: "))
area = (a * b)
console.log("O valor da área é", area, "e os lados são", a, "e", b)
