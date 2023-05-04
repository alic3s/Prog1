/** Dados três números inteiros, verificar se esses números correspondem aos lados de um
triângulo. Para que correspondam aos lados de um triângulo, cada lado deve ser menor que a
soma dos comprimentos dos outros dois lados. */

prompt = require("prompt-sync")();

// Ler os 3 números
let lado1 = parseInt(prompt("Valor do 1º lado: "))
let lado2 = parseInt(prompt("Valor do 2º lado: "))
let lado3 = parseInt(prompt("Valor do 3º lado: "))

// Verificar se correspondem
if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    console.log("Os números correspondem aos lados de um triângulo")
}else{
    console.log("Os lados não correspondem aos lados de um triângulo")
}
