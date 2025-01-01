// Erros globais são aqueles que não são capturados por nenhum `try...catch`.
// Podemos capturá-los usando `window.onerror` (no navegador) ou `process.on('uncaughtException')` (no Node.js).

process.on('uncaughtException', (erro) => {
    console.log("Opa, um erro global foi capturado!");
    console.log("Mensagem de erro:", erro.message);
});

// Forçando um erro global
throw new Error("Erro global não capturado!");

// No código acima, usamos `process.on('uncaughtException')` para capturar erros globais no Node.js.
// Em seguida, forçamos um erro global para demonstrar como ele é capturado.