// copyWithin copia elementos dentro do array, de inicio a fim-1, para a posição alvo
let numeros = [1, 2, 3, 4];
numeros.copyWithin(2, 0, 2); // Copia os elementos do índice 0 ao 1 para o índice 2

console.log(numeros); // Exibe: [1, 2, 1, 2]