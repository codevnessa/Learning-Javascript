/*
Descrição:
Parâmetros são variáveis que uma função recebe. Eles permitem que a função 
trabalhe com valores diferentes cada vez que é chamada.
*/

// Definindo uma função chamada "saudacao" com um parâmetro chamado "nome"
function saudacao(nome) {
    // Usamos o parâmetro "nome" dentro da função
    console.log("Bom dia, " + nome); // Exibe a mensagem com o nome passado
}

// Chamando a função e passando um argumento para o parâmetro "nome"
saudacao("Luís"); // Resultado: "Bom dia, Luís!" será exibido no console