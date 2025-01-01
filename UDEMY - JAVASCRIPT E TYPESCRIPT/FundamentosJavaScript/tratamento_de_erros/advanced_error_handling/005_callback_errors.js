// Em funções assíncronas antigas (callbacks), os erros são geralmente passados como o primeiro argumento da função de callback.
// É importante verificar se há erros antes de prosseguir com a execução.

function operacaoAssincrona(callback) {
    const erro = new Error("Erro em callback!");
    const resultado = null;
    callback(erro, resultado);
}

operacaoAssincrona((erro, resultado) => {
    if (erro) {
        console.log("Opa, deu um erro em callback!");
        console.log("Mensagem de erro:", erro.message);
        return;
    }
    console.log("Resultado:", resultado);
});

// No código acima, simulamos uma função assíncrona que retorna um erro no callback.
// Verificamos se há erro antes de tentar usar o resultado.