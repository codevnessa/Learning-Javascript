// Quando usamos `async/await`, podemos tratar erros com `try...catch` da mesma forma que em código síncrono.
// Isso torna o tratamento de erros em operações assíncronas mais simples e legível.

async function executar() {
    try {
        const resultado = await Promise.reject(new Error("Erro em async/await!"));
        console.log("Isso não será executado.");
    } catch (erro) {
        console.log("Opa, deu um erro em async/await!");
        console.log("Mensagem de erro:", erro.message);
    }
}

executar();

// No código acima, usamos `async/await` para lidar com uma promessa rejeitada.
// O bloco `try...catch` captura o erro e exibe uma mensagem amigável.