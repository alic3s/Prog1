// IMPORTANDO A BIBLIOTECA PROMPT

prompt = require('prompt-sync')();

let celsius = 0
let farenheit = 0

// OBTENDO OS VALORES VIA TECLADO
console.clear()
console.log("Obtendo a temperatura em Celsius e em Farenheit")
farenheit = parseInt(prompt("Temperatura em Farenheit: "))
celsius = (farenheit - 32)/1.8
console.log("A temperatura medida em grau Celsius a partir da temperatura corrente medida em Farenheit é", celsius)
