/*
O método 'forEach' é uma função de array que executa uma função de callback para cada elemento do array. 
Ele é uma alternativa mais moderna e funcional ao loop 'for' tradicional, especialmente útil para iterar sobre arrays.
*/

// Exemplo de uso do 'forEach'
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, index) => {
    console.log(`Elemento ${index}: ${numero}`);
});

/*
Neste exemplo, o método 'forEach' é utilizado para iterar sobre os elementos do array 'numeros'. 
A função de callback recebe dois argumentos: o valor do elemento e o índice do elemento. 
*/