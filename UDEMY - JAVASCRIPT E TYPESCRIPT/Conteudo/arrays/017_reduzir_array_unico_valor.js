// reduce reduz o array a um único valor, aplicando uma função acumuladora
let numeros = [1, 2, 3];
let soma = numeros.reduce((total, num) => total + num, 0); // Soma todos os números

console.log(soma); // Exibe: 6