// flatMap combina map() e flat() em uma única operação
let numeros = [1, 2];
let resultado = numeros.flatMap(num => [num, num * 2]); // Mapeia e achata o array

console.log(resultado); // Exibe: [1, 2, 2, 4]