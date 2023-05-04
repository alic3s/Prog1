/** Escreva um programa que leia o nome e a data de nascimento 
 * (dia, mês e ano) de uma pessoa e calcule a idade atual dele.
 * Exiba o nome e a idade calculada. */

prompt = require('prompt-sync')();

// Ler o nome 
let nome = prompt("Informe seu nome: ")

// Ler a data de nascimento
let dia = parseInt(prompt("Dia de nascimento: "))
let mes = parseInt(prompt("Mês de nascimento: "))
let ano = parseInt(prompt("Ano de nascimento: "))

// Data atual
let dataAtual = new Date();

// Data completa atual
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1; // os meses em Date começam em 0
let anoAtual = dataAtual.getFullYear();

// Calcular a idade atual
let idade = anoAtual - ano

// Verificar se o aniversário já passou ou não
if(mesAtual < mes || (mesAtual === mes && diaAtual < dia)){
    idade --; /** Se o mês atual for menor que o mês de nascimento, 
    ou se for igual mas o dia atual for menor que o dia de nascimento, 
    subtraímos um ano da idade, indicando que a pessoa ainda não fez aniversário este ano.*/ 
}

// Exibindo o nome e a idade calculada
console.log("Nome: " + nome)
console.log("Idade: " + idade + " anos")
