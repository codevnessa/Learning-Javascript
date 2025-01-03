function conta(operador, acumulador, ...numeros) {
    const operadores = ['+', '-', '*', '/'];

    if (!operadores.includes(operador)) {
        console.error("ERROR: O operador não existe, ou é desconhecido");
        return; 
    }

    const operacoes = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };


    for (let numero of numeros) {
        acumulador = operacoes[operador](acumulador, numero);
    }

    return acumulador;
}


console.log(conta('*', 10, 20, 30, 40, 50)); 