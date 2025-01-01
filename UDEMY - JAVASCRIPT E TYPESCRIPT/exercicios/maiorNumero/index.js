const lista = [23, 56, 87, 41, 69, 14, 92, 31, 77, 63];

function sortearNumero(lista) {
    const index = Math.floor(Math.random() * lista.length);
    return lista[index];
}

function determinarMaiorMenor(num1, num2) {
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);
    return { maior, menor };
}


    const num1 = sortearNumero(lista);
    const num2 = sortearNumero(lista);
    const { maior, menor } = determinarMaiorMenor(num1, num2);
    console.log(`Números sorteados: ${num1} e ${num2}`);
    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);


