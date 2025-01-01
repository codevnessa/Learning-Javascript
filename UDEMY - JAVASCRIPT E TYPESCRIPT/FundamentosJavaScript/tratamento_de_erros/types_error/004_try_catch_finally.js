// O `try...catch...finally` combina os três blocos: tenta executar um código, captura erros e sempre executa o `finally`.

try {
    console.log("Tentando executar o código...");
    const resultado = 10 / 2; // Código que funciona
    console.log("Resultado:", resultado);
} catch (erro) {
    console.log("Opa, deu um erro!");
    console.log("Mensagem de erro:", erro.message);
} finally {
    console.log("Isso sempre será executado, com ou sem erro.");
}

// No código acima, o bloco `try` executa uma divisão que funciona corretamente.
// Como não há erro, o bloco `catch` é ignorado.
// O bloco `finally` é executado independentemente de ocorrer um erro ou não.