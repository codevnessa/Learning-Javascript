// Exemplo de curto-circuito AND com todos os valores truthy
let valor1 = true;
let valor2 = "Texto";
let valor3 = 42;
let resultado = valor1 && valor2 && valor3;

console.log(`Resultado do curto-circuito AND: ${resultado}`);
// Explicação: Como todos os valores são truthy, o último valor (42) é retornado.