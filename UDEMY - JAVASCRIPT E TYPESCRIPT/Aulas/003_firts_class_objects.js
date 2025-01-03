/**********************************************
 * 1. DECLARAÇÃO DE FUNÇÃO CLÁSSICA (FUNCTION DECLARATION)
 **********************************************/

// Declaração de função clássica usando a palavra-chave `function`.
// Essa função é chamada de "Function Declaration".
function falaOi() {
    console.log("Oi!"); // Exibe "Oi!" no console.
}

// Chamando a função `falaOi`.
falaOi(); // Saída: "Oi!"


/**********************************************
 * 2. FUNCTION EXPRESSION (EXPRESSÃO DE FUNÇÃO)
 **********************************************/

// Function Expression: Atribuindo uma função anônima a uma variável.
// Aqui, a função não tem nome e é armazenada na variável `souUmDado`.
const souUmDado = function () {
    console.log("Sou um dado!"); // Exibe "Sou um dado!" no console.
};

// Chamando a função armazenada na variável `souUmDado`.
souUmDado(); // Saída: "Sou um dado!"


/**********************************************
 * 3. FUNÇÃO COMO PARÂMETRO DE OUTRA FUNÇÃO
 **********************************************/

// Função que recebe outra função como parâmetro.
// Isso é comum em JavaScript, pois funções são "objetos de primeira classe".
function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo:"); // Mensagem antes de executar a função.
    funcao(); // Executa a função passada como argumento.
}

// Passando a função `souUmDado` como argumento para `executaFuncao`.
executaFuncao(souUmDado);
// Saída:
// "Vou executar sua função abaixo:"
// "Sou um dado!"


/**********************************************
 * 4. ARROW FUNCTION (FUNÇÃO DE SETA)
 **********************************************/

// Arrow Function: Sintaxe mais curta para funções, introduzida no ES6.
// Aqui, a função é armazenada na variável `funcaoArrow`.
const funcaoArrow = () => {
    console.log("Sou uma Arrow Function!"); // Exibe "Sou uma Arrow Function!" no console.
};

// Chamando a Arrow Function.
funcaoArrow(); // Saída: "Sou uma Arrow Function!"


/**********************************************
 * 5. FUNÇÃO COMO MÉTODO DE UM OBJETO
 **********************************************/

// Objeto com um método (função).
// Em JavaScript, funções dentro de objetos são chamadas de métodos.
const pessoa = {
    nome: "João", // Propriedade do objeto.
    falar: function () { // Método do objeto.
        console.log("Estou falando!"); // Exibe "Estou falando!" no console.
    },
};

// Chamando o método `falar` do objeto `pessoa`.
pessoa.falar(); // Saída: "Estou falando!"


/**********************************************
 * 6. MÉTODO DE OBJETO COM SINTAXE MODERNA (ES6+)
 **********************************************/

// Objeto com método usando sintaxe moderna (sem a palavra `function`).
// Essa é uma forma mais curta de definir métodos em objetos.
const animal = {
    nome: "Rex", // Propriedade do objeto.
    latir() { // Método do objeto.
        console.log("Au au!"); // Exibe "Au au!" no console.
    },
};

// Chamando o método `latir` do objeto `animal`.
animal.latir(); // Saída: "Au au!"


/**********************************************
 * 7. FUNCTION EXPRESSION NOMEADA
 **********************************************/

// Function Expression com nome (menos comum).
// Aqui, a função tem um nome (`minhaFuncao`), mas é armazenada na variável `funcaoNomeada`.
const funcaoNomeada = function minhaFuncao() {
    console.log("Sou uma função nomeada!"); // Exibe "Sou uma função nomeada!" no console.
};

// Chamando a função armazenada na variável `funcaoNomeada`.
funcaoNomeada(); // Saída: "Sou uma função nomeada!"


/**********************************************
 * 8. FUNÇÃO ANÔNIMA EM `setInterval`
 **********************************************/

// Função anônima passada como argumento para `setInterval`.
// `setInterval` executa a função repetidamente no intervalo de tempo especificado.
setInterval(function () {
    console.log("Executando a cada 1 segundo..."); // Exibe "Executando a cada 1 segundo..." no console.
}, 1000); // Intervalo de 1000 ms (1 segundo).

// Saída: "Executando a cada 1 segundo..." (repetidamente a cada 1 segundo).