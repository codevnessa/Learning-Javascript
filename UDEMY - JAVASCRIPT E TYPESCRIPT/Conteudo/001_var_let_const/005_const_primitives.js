/**
 * 'const' não permite a reatribuição de valores primitivos.
 */

const PI = 3.14;
console.log(PI); // Saída: 3.14

// PI = 3.14159; // Erro: reatribuição não permitida

// Explicação:
// 1. 'const' é ideal para valores que não devem ser alterados.
// 2. Tentar reatribuir um valor primitivo causa erro.