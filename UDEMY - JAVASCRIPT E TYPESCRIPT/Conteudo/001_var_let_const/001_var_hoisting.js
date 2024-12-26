/**
 * Hoisting é um comportamento do JavaScript onde declarações de variáveis são movidas para o topo do escopo.
 * No caso de 'var', a variável é levantada ao topo com o valor 'undefined'.
 */

console.log(nome); // Saída: undefined (hoisting ocorre, mas a variável não foi inicializada)
var nome = "João";
console.log(nome); // Saída: João (agora a variável está inicializada)

// Explicação:
// 1. A declaração 'var nome' é levantada ao topo do escopo.
// 2. Antes da atribuição, o valor da variável é 'undefined'.
// 3. Após a atribuição, o valor é atualizado para "João".