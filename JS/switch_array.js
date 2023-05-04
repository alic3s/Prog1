prompt = require('prompt-sync')();

let opcao
let candidatos = []
let votos = []
let percentual = []
let total = 0

for(let i = 0; i < 3; i++){
    console.log("\nInforme o nome da", i + 1 + " º pessoa que está concorrendo\n")
    candidatos[i] = prompt('Nome: ')
}

for(let g = 0; g < 6; g++){
    votos[g] = 0
}

do{
    console.clear()
    console.log("### Suas opções de voto ### \n" + `1º: ${candidatos[0]}\n2º: ${candidatos[1]}\n3º: ${candidatos[2]}\n4º: Nulo\n5º: Branco\n6º: Encerrar Votação`)
    opcao = (prompt("\nEscolha: "))

    switch(opcao){
    case "1":
        votos[0]++
        total++
        break;
    case "2":
        votos[1]++
        total++
        break;
    case "3":
        votos[2]++
        total++
        break
    case "4":
        votos[3]++
        total++
        break
    case "5":
        votos[4]++
        total++
    default:
        if (opcao > 6){
            votos[5]++
            total++
        }
    }
} while(opcao != 6)

for(let a = 0; a < 6; a++){
    percentual[a] = votos[a]/total
}

console.clear()
console.log(`Candidato ${candidatos[0]}: \nQuantidade de votos - ${votos[0]} \ Percentual de votos - ${percentual[0].toFixed(2)}\n`)
console.log(`Candidato ${candidatos[1]}: \nQuantidade de votos - ${votos[1]} \ Percentual de votos - ${percentual[1].toFixed(2)}\n`)
console.log(`Candidato ${candidatos[2]}: \nQuantidade de votos - ${votos[2]} \ Percentual de votos - ${percentual[2].toFixed(2)}\n`)
console.log(`Nulos: \nQuantidade de votos - ${votos[3]} \ Percentual de votos - ${percentual[3].toFixed(2)}\n`)
console.log(`Brancos: \nQuantidade de votos - ${votos[4]} \ Percentual de votos - ${percentual[4].toFixed(2)}\n`)
console.log(`Inválidos: \nQuantidade de votos - ${votos[5]} \ Percentual de votos - ${percentual[5].toFixed(2)}\n`)
console.log(`Total de votos registrados * ${total} *`)
