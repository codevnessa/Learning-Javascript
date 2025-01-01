// O `throw` é usado para lançar erros manualmente em JavaScript.
// Isso é útil quando você quer interromper a execução do código e indicar que algo deu errado.

function verificarIdade(idade) {
    if (idade < 18) {
        throw new Error("Você precisa ser maior de idade!");
    }
    console.log("Acesso permitido.");
}

try {
    verificarIdade(16); // Idade menor que 18
} catch (erro) {
    console.log("Opa, deu um erro!");
    console.log("Mensagem de erro:", erro.message);
}

// No código acima, a função `verificarIdade` lança um erro se a idade for menor que 18.
// O `try...catch` captura o erro e exibe uma mensagem amigável.