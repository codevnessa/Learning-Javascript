// O `finally` é um bloco que sempre é executado, independentemente de ocorrer um erro ou não.
// Ele é útil para liberar recursos ou executar código que deve rodar em qualquer situação.

try {
    console.log("Tentando executar o código...");
    throw new Error("Erro forçado!");
} catch (erro) {
    console.log("Opa, deu um erro!");
    console.log("Mensagem de erro:", erro.message);
} finally {
    console.log("Isso sempre será executado, com ou sem erro.");
}

// No código acima, o bloco `try` lança um erro manualmente.
// O bloco `catch` captura o erro e exibe uma mensagem.
// O bloco `finally` é executado independentemente de ocorrer um erro ou não