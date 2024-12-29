// Função: isNaN
// Descrição: Verifica se um valor é NaN (Not-a-Number).
// Exemplo: isNaN("texto")

let valor = "texto";
let resultado = isNaN(valor);

console.log(`O valor "${valor}" é NaN? ${resultado}`);
// Explicação: Como "texto" não pode ser convertido em um número, o resultado será true.