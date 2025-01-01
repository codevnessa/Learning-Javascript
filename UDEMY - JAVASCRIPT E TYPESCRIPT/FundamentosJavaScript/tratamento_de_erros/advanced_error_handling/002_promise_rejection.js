// Promessas (Promises) podem ser rejeitadas, e é importante tratar essas rejeições para evitar erros não capturados.
// Podemos usar `.catch()` ou `try...catch` com `async/await` para tratar rejeições.

const promessaRejeitada = new Promise((resolve, reject) => {
    reject(new Error("Promessa rejeitada!"));
});

promessaRejeitada
    .then(() => console.log("Isso não será executado."))
    .catch((erro) => {
        console.log("Opa, a promessa foi rejeitada!");
        console.log("Mensagem de erro:", erro.message);
    });

// No código acima, criamos uma promessa que é rejeitada manualmente.
// Usamos o método `.catch()` para capturar e tratar a rejeição.