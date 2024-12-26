/*
'const' não permite reatribuição, mas permite a modificação de propriedades de objetos.
 */

const pessoa = {
    nome: "Maria",
    idade: 25
};

console.log(pessoa); // Saída: { nome: "Maria", idade: 25 }

pessoa.idade = 26; // Modificação de propriedade permitida
console.log(pessoa); // Saída: { nome: "Maria", idade: 26 }

// pessoa = { nome: "João" }; // Erro: reatribuição não permitida

// Explicação:
// 1. 'const' impede a reatribuição da variável 'pessoa'.
// 2. Propriedades do objeto podem ser modificadas.