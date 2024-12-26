/**
 * O escopo de bloco significa que a variável só existe dentro do bloco onde foi declarada.
 */

if (true) {
    let sobrenome = "Silva";
    console.log(sobrenome); // Saída: Silva (variável acessível dentro do bloco)
    sobrenome = "Santos"; // Reatribuição permitida
    console.log(sobrenome); // Saída: Santos
}

// console.log(sobrenome); // Erro: sobrenome não está definido fora do bloco

// Explicação:
// 1. 'let' limita o escopo da variável ao bloco onde foi declarada.
// 2. Reatribuição é permitida, mas redeclaração no mesmo escopo causa erro.