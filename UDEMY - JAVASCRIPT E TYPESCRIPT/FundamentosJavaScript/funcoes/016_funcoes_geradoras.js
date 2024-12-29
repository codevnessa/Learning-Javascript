/*
Descrição:
Funções geradoras são funções que podem ser pausadas e retomadas. 
Elas usam a palavra-chave "yield" para retornar valores sequencialmente.
*/

// Definindo uma função geradora
function* gerador() {
    yield 1; // Pausa e retorna 1
    yield 2; // Pausa e retorna 2
}

// Criando uma instância do gerador
const gen = gerador();
console.log(gen.next().value); // Resultado: 1
console.log(gen.next().value); // Resultado: 2