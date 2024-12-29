/*
Descrição:
Os métodos call, apply e bind permitem controlar o valor de "this" 
dentro de uma função. Eles são úteis para reutilizar funções em diferentes contextos.
*/

const pessoa = {
    nome: "Luís"
};

// Definindo uma função que usa "this"
function saudacao() {
    console.log("Olá, " + this.nome); // "this" se refere ao objeto passado
}

// Usando "call" para definir "this" como o objeto "pessoa"
saudacao.call(pessoa); // Resultado: "Olá, Luís" será exibido no console