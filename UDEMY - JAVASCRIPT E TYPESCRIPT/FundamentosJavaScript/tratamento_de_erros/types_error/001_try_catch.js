// O try...catch é usado para capturar e tratar erros em JavaScript.
// Ele permite que você tente executar um bloco de código e, se ocorrer um erro, capturá-lo e tratá-lo.

try {
    const resultado = 10 / 0; // Divisão por zero não gera erro em JavaScript, mas vamos forçar um erro
    if (!isFinite(resultado)) {
        throw new Error("Divisão por zero resultou em infinito!");
    }
    console.log("Resultado:", resultado);
} catch (erro) {
    console.log("Opa, deu um erro!");
    console.log("Mensagem de erro:", erro.message);
}

// No código acima, o bloco `try` tenta executar uma divisão por zero.
// Como isso resulta em infinito, lançamos um erro manualmente usando `throw`.
// O bloco `catch` captura o erro e exibe uma mensagem amigável.