/* 

A instrução 'break' é utilizada para interromper a execução de um loop, seja ele 'while', 'do...while', 'for', etc. 
Quando 'break' é encontrado, o loop é imediatamente encerrado, e o controle do programa passa para a instrução seguinte ao loop.

*/

let contador = 0;
while (contador < 5) {
    if (contador === 3) {
        break;
    }
    console.log(`Contador: ${contador}`);
    contador++;
}

/* 

o loop 'while' é utilizado para iterar enquanto o valor de 'contador' for menor que 5. 
No entanto, quando 'contador' atinge o valor 3, a instrução 'break' é executada, interrompendo o loop. 
O bloco de código dentro do loop imprime o valor atual de 'contador' no console até que o loop seja interrompido.

*/