/* 

O loop 'do...while' é semelhante ao 'while', mas com uma diferença crucial: o bloco de código é executado pelo menos uma vez, 
independentemente da condição. Após a primeira execução, a condição é avaliada, e o loop continua enquanto a condição for verdadeira

*/

let contador = 0;
do {
    console.log(`Contador: ${contador}`);
    contador++;
} while (contador <= 6
);

/* 

o loop 'do...while' é utilizado para iterar enquanto o valor de 'contador' for menor que 3. 
O bloco de código é executado pelo menos uma vez, mesmo que a condição seja falsa desde o início. 
A cada iteração, o valor de 'contador' é incrementado em 1, e o valor atual é impresso no console.

*/