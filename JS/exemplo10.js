/** O custo ao consumidor de um carro novo é a soma do custo 
 * de fábrica com a percentagem do distribuidor e dos impostos
 * (aplicados ao custo de fábrica). Supondo que a percentagem do 
 * distribuidor seja de 28% e os impostos de 45%, escreva um programa
 * que leia o custo de fábrica de um carro e escreva o custo ao consumidor. */

prompt = require('prompt-sync')();

// Ler o custo de fábrica
let custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "))

let custoDistribuidor = (28/100) * custoFabrica
let custoImpostos = (45/100) * custoFabrica

// Custo consumidor
let custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos

// Exibir o custo ao consumidor
console.log('o custo ao consumidor do carro é: ' + custoConsumidor.toFixed(2))
