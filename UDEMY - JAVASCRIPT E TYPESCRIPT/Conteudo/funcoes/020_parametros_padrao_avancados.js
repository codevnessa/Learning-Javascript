/*
Descrição:
Parâmetros padrão avançados permitem usar expressões ou funções como 
valores padrão para parâmetros.
*/

// Função que calcula a idade padrão
function calcularIdade() {
    return 25; // Retorna uma idade padrão
}

// Função que usa uma função como valor padrão para o parâmetro "idade"
function criarUsuario(nome, idade = calcularIdade()) {
    console.log(nome + " tem " + idade + " anos.");
}

criarUsuario("Luís"); // Resultado: "Luís tem 25 anos."