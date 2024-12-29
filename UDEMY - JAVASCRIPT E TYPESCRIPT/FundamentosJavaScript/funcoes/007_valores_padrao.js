/*
Descrição:
Podemos definir valores padrão para os parâmetros de uma função. 
Se nenhum argumento for passado, o valor padrão será usado.
*/

// Definindo uma função chamada "soma" com valores padrão para "x" e "y"
function soma(x = 1, y = 1) {
    return x + y; // Retorna a soma dos valores (ou os valores padrão, se nenhum for passado)
}

// Chamando a função sem argumentos
console.log(soma()); // Resultado: 2 (usa os valores padrão)

// Chamando a função com argumentos
console.log(soma(5, 3)); // Resultado: 8 (usa os valores passados)