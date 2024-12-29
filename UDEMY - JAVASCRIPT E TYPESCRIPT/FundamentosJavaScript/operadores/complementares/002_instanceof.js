// Operador: instanceof
// Descrição: Verifica se um objeto é uma instância de uma classe ou construtor.
// Exemplo: new Date() instanceof Date

let data = new Date();
let resultado = data instanceof Date;

console.log(`A variável "data" é uma instância de Date? ${resultado}`);
// Explicação: Como "data" foi criada usando o construtor Date, o resultado será true.