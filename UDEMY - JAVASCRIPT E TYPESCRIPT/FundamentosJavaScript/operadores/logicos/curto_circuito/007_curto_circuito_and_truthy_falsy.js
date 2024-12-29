// Exemplo de curto-circuito AND com valores truthy e falsy
let valor1 = "Texto"; // Truthy
let valor2 = 0;       // Falsy
let resultado = valor1 && valor2;

console.log(`Resultado do curto-circuito AND: ${resultado}`);
// Explicação: Como valor1 é truthy, o operador && avalia valor2. Como valor2 é falsy (0), ele é retornado.