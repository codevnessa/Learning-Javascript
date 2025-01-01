const lista = [37, 27, 29, 50, 35, 23, 60, 15, 41, 12, 43, 10, 33, 55, 36, 30, 17, 18, 25, 24];

function sortearNumero(lista) {
    const index = Math.floor(Math.random() * lista.length);
    return lista[index];
}

const num1 = sortearNumero(lista);
const num2 = sortearNumero(lista);

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

console.log(`Número sorteado 1: ${num1}`);
fizzBuzz(num1);

console.log(`Número sorteado 2: ${num2}`);
fizzBuzz(num2);