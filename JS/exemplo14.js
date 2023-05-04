/** A partir da questão anterior, caso as medidas correspondam aos lados de um triângulo
informar o tipo desse triângulo, considerando que:
a) Triângulo Equilátero – possui os três lados iguais;
b) Triângulo Isósceles – possui dois lados iguais e um diferente;
c) Triângulo Escaleno – possui três lados com medidas diferentes. */

prompt = require("prompt-sync")();

// Ler os 3 números
let lado1 = parseInt(prompt("Valor do 1º lado: "))
let lado2 = parseInt(prompt("Valor do 2º lado: "))
let lado3 = parseInt(prompt("Valor do 3º lado: "))

// Verificar se correspondem
if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    if(lado1 === lado2 === lado3){
        console.log("Triângulo equilátero")
    }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        console.log("Triângulo isósceles")
    }else{
        console.log("Triângulo Escaleno")
    }
}else{
    console.log("Os lados não correspondem aos lados de um triângulo")
}
