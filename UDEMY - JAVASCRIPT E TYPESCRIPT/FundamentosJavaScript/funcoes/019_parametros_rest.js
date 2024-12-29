/*
Descrição:
O parâmetro rest permite que uma função receba um número indefinido de 
argumentos como um array. Ele é representado por "..." antes do nome do parâmetro.
*/

// Definindo uma função que usa o parâmetro rest
function soma(...nums) {
    return nums.reduce((a, b) => a + b, 0); // Soma todos os números passados
}

console.log(soma(1, 2, 3, 4)); // Resultado: 10 (1 + 2 + 3 + 4)