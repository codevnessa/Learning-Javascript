/*
Descrição:
Argumentos são os valores que passamos para os parâmetros de uma função 
quando a chamamos. Eles substituem os parâmetros dentro da função.
*/

// Definindo uma função chamada "soma" com dois parâmetros: "x" e "y"
function soma(x, y) {
    // A função retorna a soma dos valores passados como argumentos
    return x + y;
}

// Chamando a função e passando os argumentos 5 e 3
let resultado = soma(5, 3); // O valor retornado pela função é armazenado na variável "resultado"
console.log(resultado); // Resultado: 8 será exibido no console