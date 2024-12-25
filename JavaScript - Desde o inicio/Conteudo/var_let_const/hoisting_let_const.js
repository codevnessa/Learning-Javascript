// 'let' e 'const' também são elevadas, mas não são inicializadas. Tentar acessá-las antes da declaração resulta em um erro.

console.log(idade); // Erro: Cannot access 'idade' before initialization
let idade = 25;

console.log(altura); // Erro: Cannot access 'altura' before initialization
const altura = 1.75;