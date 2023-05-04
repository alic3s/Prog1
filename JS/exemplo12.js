/** Escrever um programa que receba três notas e calcule a
 * média ponderada desse aluno, considerando que: a primeira
 * nota tem peso 2,5; a segunda nota tem peso 3,5; e a terceira
nota tem peso 4. Exibir as três notas e a média calculada.
Média =
((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3))
(peso1 + peso2 + peso3)*/

prompt = require('prompt-sync')();

let notas = []
let nota
let somaNotas
let somaPesos
let media

// Ler as 3 notas do aluno
for(let i = 0; i < 3; i++){
    console.log("Por favor informe a", i + 1 + "º nota")
    nota = prompt("Nota = ")
    notas.push(nota)
}

// Calcular a média ponderada
somaNotas = (notas[0] * 2.5) + (notas[1] * 3.5) + (notas[2] * 4)
somaPesos = (2.5 + 3.5 + 4)
media = somaNotas/somaPesos

console.clear()
console.log(`1º Nota: ${notas[0]}\n2º Nota: ${notas[1]}\n3º Nota: ${notas[2]}\nMédia calculada: ${media}`)
