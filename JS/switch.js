/** Utilizando estruturas de decisão e estruturas de repetição, implementar um programa para uma urna eletrônica,
onde:
a. três candidatos concorrem à eleição;
b. existem as opções de:
i. voto nulo;
ii. voto em brando;
c. votos inválidos (cuja opção selecionada não exista) não são considerados;
d. a opção “encerrar votação” finaliza a execução do programa e totaliza os votos registrados;
e. exibir os seguintes valores:
i. total de votos de cada candidato;
ii. percentual de votos de cada candidato;
iii. total de votos “em branco”;
iv. percentual de votos “em branco;
v. total de votos “nulo”;
vi. percentual de votos “nulo”;
vii. total de votos registrados; */ 


prompt = require('prompt-sync')();

let opcao
let Candidato = 0
let Candidata = 0
let Candidate = 0
let Nulo = 0
let Branco = 0
let Invalidos = 0
let total = 0

do{
    console.log(" ### Suas opções de voto ### \n1 - Candidato \n2 - Candidata \n3 - Candidate \n4 - Nulo \n5 - Branco \n6 - Encerrar Votação\n")
    opcao = (prompt("Faça sua escolha: "))

    switch(opcao){
    case "1":
        Candidato+=1
        total++
        break;
    case "2":
        Candidata+=1
        total++
        break;
    case "3":
        Candidate+=1
        total++
        break;
    case "4":
        Nulo+=1
        total++
        break
    case "5":
        Branco+=1
        total++
    default:
        total++
        Invalidos+=1
    }
} while(opcao != 6)

console.log("Total de votos do 1º candidato: " + Candidato + "\nPercentual: " + (Candidato/total).toFixed(2))
console.log()

console.log("Total de votos do 2º candidato: " + Candidata + "\nPercentual: " + (Candidata/total).toFixed(2))
console.log()

console.log("Total de votos do 3º candidato: " + Candidate + "\nPercentual: " + (Candidate/total).toFixed(2))
console.log()

console.log("Total de votos nulos: " + Nulo + "\nPercentual: " + (Nulo/total).toFixed(2))
console.log()

console.log("Total de votos em branco: " + Branco + "\nPercentual: " + (Branco/total).toFixed(2))
console.log()

console.log("Total de votos registrados: " + total)
