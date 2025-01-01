
/*
O loop 'for...in' é utilizado para iterar sobre as propriedades enumeráveis de um objeto. 
Ele percorre todas as chaves do objeto, permitindo acessar seus valores correspondentes.
*/

// Exemplo de uso do 'for...in'
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

/*
Neste exemplo, o loop 'for...in' é utilizado para iterar sobre as propriedades do objeto 'pessoa'. 
A variável 'chave' assume o valor de cada propriedade do objeto a cada iteração. 
*/