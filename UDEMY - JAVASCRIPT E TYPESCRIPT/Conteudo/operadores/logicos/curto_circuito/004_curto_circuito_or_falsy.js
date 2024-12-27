// Avaliação de Curto-Circuito: Operador OR (||) com valores falsy
// Descrição: Se o primeiro valor for falsy, o segundo valor é retornado.
// Exemplo: false || "Texto"

let valor1 = false;
let valor2 = "Texto";
let resultado = valor1 || valor2;

console.log(`Resultado do curto-circuito OR com falsy: ${resultado}`);
// Explicação: Como o primeiro valor (valor1) é falsy (false), o segundo valor (valor2) é retornado.