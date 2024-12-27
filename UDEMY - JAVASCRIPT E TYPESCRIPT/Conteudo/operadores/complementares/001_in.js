// Operador: in
// Descrição: Verifica se uma propriedade existe em um objeto.
// Exemplo: "nome" in { nome: "João" }

let objeto = { nome: "João", idade: 30 };
let propriedade = "nome";
let resultado = propriedade in objeto;

console.log(`A propriedade "${propriedade}" existe no objeto? ${resultado}`);
// Explicação: Como a propriedade "nome" existe no objeto, o resultado será true.