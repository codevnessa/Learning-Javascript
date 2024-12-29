/*
Descrição:
Um callback é uma função passada como argumento para outra função. 
Isso permite que uma função chame outra função após realizar uma tarefa.
*/

// Definindo uma função que recebe um callback como argumento
function executarFuncao(callback) {
    console.log("Executando a função principal...");
    callback(); // Chama a função passada como argumento
}

// Passando uma função anônima como callback
executarFuncao(function() {
    console.log("Callback executado!"); // Exibe: "Callback executado!"
});