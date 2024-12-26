/*
Descrição:
Um closure é uma função que "lembra" do ambiente onde foi criada, 
mesmo após esse ambiente ter sido encerrado.
*/

// Definindo uma função que retorna outra função (closure)
function contador() {
    let count = 0; // Variável "count" é lembrada pela função interna
    return function() {
        return ++count; // Incrementa e retorna o valor de "count"
    };
}

// Criando uma instância do contador
const incrementar = contador();
console.log(incrementar()); // Resultado: 1
console.log(incrementar()); // Resultado: 2