/** Monte uma aplicação, em javascript, na qual o usuário informe dois números, 
* a operação que deseja realizar (+, -, x, /), calcule e exiba o resultado da operação matemática. */ 

prompt = require('prompt-sync')();

// Ler os dois números informados pelo usuário
let numero1 = parseFloat(prompt('Digite o primeiro número:'))
let numero2 = parseFloat(prompt("Digite o segundo número:"))

//Ler a operação desejada
let operação = prompt("Digite a operação desejada(+, -, x, /):")

//Calcular resultado
let resultado

if(operação === "+"){
    resultado = numero1 + numero2;
}
else if(operação === "-"){
    resultado = numero1 - numero2;
}
else if(operação === "x"){
    resultado = numero1 * numero2;
}
else if(operação === "/"){
    resultado = numero1 / numero2;
}
else{
    alert("Operação inválida. Tente novamente.")
}

// Exibir resultado da operação
if(resultado !== undefined){
    console.log("O resultado da operação " + numero1 + " " + operação + " " + numero2 + " é " + resultado)
}
