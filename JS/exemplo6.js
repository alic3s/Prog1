/** Desenvolva um programa que leia o nome e a idade de 3 pessoas e mostre o nome da pessoa mais velha e o nome da pessoa mais nova. */

prompt = require('prompt-sync')();

// Função para ler o nome e a idade de uma pessoa
function lerPessoa() {
    let nome = prompt("Digite o nome da pessoa:");
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    return { nome, idade };
  }
  
  // Ler os dados das 3 pessoas
  let pessoa1 = lerPessoa();
  let pessoa2 = lerPessoa();
  let pessoa3 = lerPessoa();
  
  // Verificar a pessoa mais velha
  let pessoaMaisVelha = pessoa1;
  if (pessoa2.idade > pessoaMaisVelha.idade) {
    pessoaMaisVelha = pessoa2;
  }
  if (pessoa3.idade > pessoaMaisVelha.idade) {
    pessoaMaisVelha = pessoa3;
  }
  
  // Verificar a pessoa mais nova
  let pessoaMaisNova = pessoa1;
  if (pessoa2.idade < pessoaMaisNova.idade) {
    pessoaMaisNova = pessoa2;
  }
  if (pessoa3.idade < pessoaMaisNova.idade) {
    pessoaMaisNova = pessoa3;
  }
  
  // Exibir o nome da pessoa mais velha e da pessoa mais nova
  console.log("Pessoa mais velha: " + pessoaMaisVelha.nome);
  console.log("Pessoa mais nova: " + pessoaMaisNova.nome);
