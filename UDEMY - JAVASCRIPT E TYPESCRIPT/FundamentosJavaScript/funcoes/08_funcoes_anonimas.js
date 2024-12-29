/*
Descrição:
Funções anônimas são funções sem nome. Elas são armazenadas em variáveis 
e podem ser chamadas usando o nome da variável.
*/

// Armazenando uma função anônima na variável "raiz"
const raiz = function(n) {
    return n ** 0.5; // Retorna a raiz quadrada de "n"
};

// Chamando a função armazenada na variável
console.log(raiz(9)); // Resultado: 3 será exibido no console