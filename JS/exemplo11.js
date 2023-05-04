/** Um banco concederá um crédito especial aos seus clientes,
 * variável com o saldo médio no último ano. Faça um programa
 * que leia o saldo médio de um cliente e calcule o valor do 
 * crédito de acordo com a tabela abaixo. Mostre uma mensagem 
 * informando o saldo médio e o valor do crédito. */

prompt = require('prompt-sync')();

// Ler o saldo médio do último ano
let saldoMedio = parseFloat(prompt("Informe o valor do seu saldo médio: "))

// Valor do credito
let creditoEspecial = 0

if (saldoMedio > 0 && saldoMedio <= 200){
    creditoEspecial = 0
    console.log("Valor insuficiente para crédito")
} else if(saldoMedio <= 400){
    creditoEspecial = 0.2 * saldoMedio
} else if(saldoMedio <= 600){
    creditoEspecial = 0.3 * saldoMedio
} else{
    creditoEspecial = 0.4 * saldoMedio
}

console.log("O saldo médio é de " + saldoMedio.toFixed(2) + " e o valor do crédito é de " + creditoEspecial.toFixed(2))
