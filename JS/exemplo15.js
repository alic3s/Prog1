/** Escrever um programa para calcular o valor do discriminante de uma equação do segundo
grau. Se o discriminante for menor que zero, exibir a mensagem “Raízes imaginárias”; caso
contrário exibir a mensagem “Raízes reais”, seguida dos valores calculados das raízes. */

prompt = require("prompt-sync")();

let raiz1
let raiz2

// Coeficientes da equação
let a = parseFloat(prompt('Digite o valor de "a" (coeficiente de x^2): '))
let b = parseFloat(prompt('Digite o valor de "b" (coeficiente de x): '))
let c = parseFloat(prompt('Digite o valor de "c" (coeficiente independente): '))

// Ler discriminante
let discriminante = b * (b - 4) * a * c

// Verificar o valor do discriminante
if(discriminante < 0){
    console.log("Raízes imaginárias")
}else{
    // Calcular raízes
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a)
    raiz2 = (- b - Math.sqrt(discriminante)) / (2 * a)
    console.log("Raízes reais:");
    console.log("Raiz 1: " + raiz1.toFixed(2));
    console.log("Raiz 2: " + raiz2.toFixed(2));

}
