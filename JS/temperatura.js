// convertendo temperaturas de Farenheit para Celsius

// definindo as faixas de temperaturas Farenheit
let temperaturaInicial = -25
let temperaturaFinal = 25

// função para converter os valores
const converter = temp => (temp * 1.8) + 32

// definindo e preenchento o array de temperaturas em Farenheit
temperaturas = []
for (temperatura = temperaturaInicial; temperatura <= temperaturaFinal; temperatura++) {
temperaturas.push(temperatura)
}

// calculanto a temperatura em Celcuis a partir das temperaturas em Farenheit
convertida = temperaturas.map(converter)

// exibindo a tabela de temperaturas
console.log()
console.log('Conversão de temperaturas (Farenheit x Celsius)')
for (indice in temperaturas) {
console.log(`${parseFloat(temperaturas[indice]).toFixed(1)} F =>
${parseFloat(convertida[indice]).toFixed(1)} C`)
}
