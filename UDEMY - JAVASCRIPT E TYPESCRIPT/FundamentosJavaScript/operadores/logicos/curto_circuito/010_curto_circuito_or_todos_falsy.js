// Exemplo de curto-circuito OR com todos os valores falsy
let valor1 = false;
let valor2 = 0;
let valor3 = null;
let resultado = valor1 || valor2 || valor3;

console.log(`Resultado do curto-circuito OR: ${resultado}`);
// Explicação: Como todos os valores são falsy, o último valor (null) é retornado.