/**
 * Variáveis declaradas com 'var' fora de funções têm escopo global.
 */

var globalVar = "Eu sou global";

function testeEscopo() {
    console.log(globalVar); // Saída: Eu sou global (acessível dentro da função)
}

testeEscopo();
console.log(globalVar); // Saída: Eu sou global (acessível fora da função)

// Explicação:
// 1. 'var' tem escopo de função ou global.
// 2. Variáveis globais podem ser acessadas em qualquer lugar do código.