/**
 * 'var' permite redeclarar variáveis no mesmo escopo.
 */

var cidade = "São Paulo";
console.log(cidade); // Saída: São Paulo

var cidade = "Rio de Janeiro"; // Redeclaração permitida
console.log(cidade); // Saída: Rio de Janeiro

// Explicação:
// 1. 'var' permite redeclarar variáveis no mesmo escopo.
// 2. Isso pode levar a confusão e bugs, por isso 'let' e 'const' são preferíveis.