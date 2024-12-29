// Verificando se um valor é NaN usando Number.isNaN()
let resultado = 10 * "Olá"; // Multiplicação inválida resulta em NaN
let ehNaN = Number.isNaN(resultado); // Verifica se o resultado é NaN

console.log(ehNaN); // Exibe: true