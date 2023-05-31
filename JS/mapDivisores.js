prompt = require('prompt-sync')();

// encontrar os divisores

function encontrarDivisores(n){
    const divisores = []

    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            divisores.push(i)
        }
    }
    return divisores
} 

// ler o valor de n
numeros = []
while(true){
    const n = parseInt(prompt("Digite um número (0 para encerrar): "))
    if(n == 0){
        break
    } else {
        numeros.push(n)
    }
}

listadeDivisores = numeros.map(encontrarDivisores)

// fazer um for formatado ??????
console.log(listadeDivisores)
