// Com 'var', 'let' e 'const', você pode alterar as propriedades de um objeto, mesmo que o objeto seja declarado com 'const'.

const pessoa = {
    nome: "Maria",
    idade: 30
};

pessoa.idade = 31; // Alterando uma propriedade do objeto
console.log(pessoa); // { nome: 'Maria', idade: 31 }

// No entanto, com 'const', você não pode reatribuir o objeto inteiro.
pessoa = { nome: "João" }; // Erro: Assignment to constant variable