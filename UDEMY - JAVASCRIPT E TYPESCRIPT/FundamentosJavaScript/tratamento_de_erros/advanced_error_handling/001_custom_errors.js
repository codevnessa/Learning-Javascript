// Erros personalizados são úteis quando você quer criar tipos específicos de erros para situações específicas.
// Eles são criados estendendo a classe `Error` do JavaScript.

class ErroPersonalizado extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ErroPersonalizado";
    }
}

try {
    throw new ErroPersonalizado("Isso é um erro personalizado!");
} catch (erro) {
    console.log("Opa, deu um erro personalizado!");
    console.log("Nome do erro:", erro.name);
    console.log("Mensagem de erro:", erro.message);
}

// No código acima, criamos uma classe `ErroPersonalizado` que estende a classe `Error`.
// Em seguida, lançamos esse erro manualmente usando `throw`.
// O bloco `catch` captura o erro e exibe o nome e a mensagem personalizados.