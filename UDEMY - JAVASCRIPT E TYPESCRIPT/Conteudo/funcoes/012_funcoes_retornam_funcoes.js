/*
Descrição:
Uma função pode retornar outra função. Isso é útil para criar funções 
especializadas com base em algum valor ou configuração.
*/

// Definindo uma função que retorna outra função
function criarMultiplicador(m) {
    return function(n) {
        return n * m; // Retorna o resultado da multiplicação
    };
}

// Criando uma função que dobra um número
const dobrar = criarMultiplicador(2); // "m" é 2 aqui
console.log(dobrar(5)); // Resultado: 10 (5 * 2)