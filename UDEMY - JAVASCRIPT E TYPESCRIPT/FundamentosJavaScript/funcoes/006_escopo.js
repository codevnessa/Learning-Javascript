/*
Descrição:
O escopo define onde uma variável pode ser acessada. Variáveis declaradas 
dentro de uma função não podem ser acessadas fora dela.
*/

// Definindo uma função chamada "exemplo"
function exemplo() {
    // Variável "mensagem" só existe dentro da função
    let mensagem = "Olá!";
    console.log(mensagem); // Exibe: "Olá!"
}

// Chamando a função
exemplo(); // Resultado: "Olá!" será exibido no console

// Tentar acessar "mensagem" fora da função causará um erro
// console.log(mensagem); // Isso não funcionará, pois "mensagem" não está acessível aqui