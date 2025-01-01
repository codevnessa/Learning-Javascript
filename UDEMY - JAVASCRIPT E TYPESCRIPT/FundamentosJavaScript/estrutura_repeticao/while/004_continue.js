/*

A instrução 'continue' é utilizada para pular a iteração atual de um loop e continuar com a próxima iteração. 
Quando 'continue' é encontrado, o restante do bloco de código dentro do loop é ignorado, e o loop avança para a próxima iteração.

*/

let contador = 0;
while (contador < 5) {
    contador++;
    if (contador === 3) {
        continue;
    }
    console.log(`Contador: ${contador}`);
}

/*

Neste exemplo, o loop 'while' é utilizado para iterar enquanto o valor de 'contador' for menor que 5. 
Quando 'contador' atinge o valor 3, a instrução 'continue' é executada, pulando a iteração atual. 
O bloco de código dentro do loop imprime o valor atual de 'contador' no console, exceto quando 'contador' é 3.

*/