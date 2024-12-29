/*
Descrição:
O objeto "arguments" é uma coleção de todos os argumentos passados 
para uma função. Ele é útil quando não sabemos quantos argumentos serão passados.
*/

// Definindo uma função que usa o objeto "arguments"
function exibirArgs() {
    console.log(arguments); // Exibe todos os argumentos passados
}

exibirArgs(1, 2, 3); // Resultado: { '0': 1, '1': 2, '2': 3 } será exibido no console