// flat "achata" um array multidimensional em um array de uma única dimensão
let array = [1, [2, [3]]];
let resultado = array.flat(2); // Achata o array em 2 níveis

console.log(resultado); // Exibe: [1, 2, 3]