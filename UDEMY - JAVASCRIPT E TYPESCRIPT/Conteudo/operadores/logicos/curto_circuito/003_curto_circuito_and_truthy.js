// Avaliação de Curto-Circuito: Operador AND (&&) com valores truthy
// Descrição: Se o primeiro valor for truthy, o segundo valor é retornado.
// Exemplo: true && "Texto"

let valor1 = true;
let valor2 = "Texto";
let resultado = valor1 && valor2;

console.log(`Resultado do curto-circuito AND com truthy: ${resultado}`);
// Explicação: Como o primeiro valor (valor1) é truthy (true), o segundo valor (valor2) é retornado.