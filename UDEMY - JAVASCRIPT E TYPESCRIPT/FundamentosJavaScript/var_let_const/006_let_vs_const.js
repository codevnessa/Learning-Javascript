/*
'let' permite reatribuição, enquanto 'const' não.
*/

let contador = 0;
contador = 1; // Reatribuição permitida
console.log(contador); // Saída: 1

const MAXIMO = 100;
// MAXIMO = 200; // Erro: reatribuição não permitida
console.log(MAXIMO); // Saída: 100

// Explicação:
// 1. Use 'let' quando o valor precisa ser alterado.
// 2. Use 'const' para valores constantes que não devem mudar.