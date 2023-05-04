/** Montar uma aplicação que receba o nome de um aluno, suas quatro notas
 * e calcule e exiba a sua média final. A aplicação deverá exibir também a 
 * situação final desse aluno (Aprovado/Recuperação/Reprovado)
 * Considere as faixas de médias abaixo*/

prompt = require('prompt-sync')();

// Ler o nome do aluno
let nome = prompt("Digite o nome do aluno: ")

// Ler as notas
let notas = []

for(let i = 1; i <= 4; i++){
    let nota = parseFloat(prompt("Digite a " + i + "º nota" + " do aluno: "));
    notas.push(nota);
}

//Calcular média
let soma = 0

for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
let media = soma / notas.length
console.log(media.toFixed(2))

let situacao;

if(media >= 6.0){
    situacao = "Aprovado"
}
else if(media >= 4){
    situacao = "Recuperação"
}
else{
    situacao = "Reprovado"
}

// Exibir situação
console.log("Situação final do(a) aluno(a) " + nome + ": " + situacao)
