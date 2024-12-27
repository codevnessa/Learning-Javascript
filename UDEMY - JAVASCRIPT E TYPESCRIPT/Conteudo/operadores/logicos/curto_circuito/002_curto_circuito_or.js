// Avaliação de Curto-Circuito: Operador OR (||)
// Descrição: Retorna o primeiro valor truthy encontrado. Se todos os valores forem falsy, retorna o último valor
// Exemplo: "Texto" || false

let valor1 = "Texto";
let valor2 = false;
let resultado = valor1 || valor2;

console.log(`Resultado do curto-circuito OR: ${resultado}`);
// Explicação: Como o primeiro valor (valor1) é truthy ("Texto"), ele é retornado diretamente, sem avaliar o segundo valor.