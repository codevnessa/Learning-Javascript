// Exemplo de curto-circuito OR com valores truthy e falsy
let valor1 = "";      // Falsy
let valor2 = "Texto"; // Truthy
let resultado = valor1 || valor2;

console.log(`Resultado do curto-circuito OR: ${resultado}`);
// Explicação: Como valor1 é falsy, o operador || avalia valor2. Como valor2 é truthy ("Texto"), ele é retornado.