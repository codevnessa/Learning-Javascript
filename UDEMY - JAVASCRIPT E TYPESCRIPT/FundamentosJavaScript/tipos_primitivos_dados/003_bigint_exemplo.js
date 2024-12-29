/**
 * Resumo: Este código mostra como trabalhar com números inteiros de precisão arbitrária, que são úteis para números muito grandes.
 * Uso prático: Use BigInt quando precisar trabalhar com números maiores que o limite seguro do tipo Number.
 */

// Criando um BigInt
let numeroGrande = 9007199254740991n;
console.log(numeroGrande); // 9007199254740991n

// Operações com BigInt
let outroNumeroGrande = 12345678901234567890n;
let soma = numeroGrande + outroNumeroGrande;
console.log(soma); // 12345678910241767081n

// BigInt não pode ser misturado diretamente com Number
// let mistura = numeroGrande + 1; // Erro
let mistura = numeroGrande + BigInt(1);
console.log(mistura); // 9007199254740992n