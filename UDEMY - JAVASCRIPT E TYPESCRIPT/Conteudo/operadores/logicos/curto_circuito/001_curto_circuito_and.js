// Avaliação de Curto-Circuito: Operador AND (&&)
// Descrição: Retorna o primeiro valor falsy encontrado. Se todos os valores forem truthy, retorna o último valor
// Exemplo: false && "Texto"

let valor1 = false;
let valor2 = "Texto";
let resultado = valor1 && valor2;

console.log(`Resultado do curto-circuito AND: ${resultado}`);
// Explicação: Como o primeiro valor (valor1) é falsy (false), ele é retornado diretamente, sem avaliar o segundo valor.