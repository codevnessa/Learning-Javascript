/**
 * Resumo: Este código mostra como uma variável declarada, mas não inicializada, tem o valor undefined.
 * Uso prático: undefined é o valor padrão para variáveis não atribuídas. Use-o para verificar se uma variável foi inicializada.
 */

// Variável declarada, mas não inicializada
let x;
console.log(x); // undefined

// Verificando se uma variável é undefined
if (x === undefined) {
    console.log("x não foi definido.");
} else {
    console.log("x foi definido.");
}