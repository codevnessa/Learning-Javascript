/*
Descrição:
Funções recursivas são funções que chamam a si mesmas. 
Elas são úteis para resolver problemas que podem ser divididos em subproblemas.
*/

// Definindo uma função recursiva para calcular o fatorial de um número
function fatorial(n) {
    return n === 0 ? 1 : n * fatorial(n - 1); // Chama a si mesma até n ser 0
}

console.log(fatorial(5)); // Resultado: 120 (5! = 5 * 4 * 3 * 2 * 1)