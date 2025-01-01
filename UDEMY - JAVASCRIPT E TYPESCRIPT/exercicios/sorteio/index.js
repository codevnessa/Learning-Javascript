// Explicação do conteúdo:
// Este código gera números aleatórios entre um valor mínimo e máximo até que o número 10 seja gerado.
// Ele demonstra o uso de funções, loops e a função `Math.random()` para gerar números aleatórios.

// Código:
function random(min, max) {
    // Gera um número aleatório entre min e max, incluindo ambos.
    const r = Math.random() * (max - min + 1) + min;
    // Arredonda o número para baixo para garantir um valor inteiro.
    return Math.floor(r);
}

const min = 1; // Valor mínimo do intervalo.
const max = 20; // Valor máximo do intervalo.

let rand = random(min, max); // Gera o primeiro número aleatório.

// Loop que continua até que o número 10 seja gerado.
while (rand !== 10) {
    rand = random(min, max); // Gera um novo número aleatório.
    console.log(rand); // Exibe o número gerado no console.
}

// Explicação do código:
// 1. A função `random(min, max)` gera um número aleatório entre `min` e `max`, incluindo ambos.
//    - `Math.random()` retorna um número entre 0 (inclusive) e 1 (exclusivo).
//    - Multiplicamos por `(max - min + 1)` para cobrir todo o intervalo desejado.
//    - Somamos `min` para ajustar o valor ao intervalo correto.
//    - `Math.floor()` arredonda o número para baixo, garantindo um valor inteiro.
// 2. As variáveis `min` e `max` definem o intervalo de números aleatórios.
// 3. A variável `rand` armazena o número aleatório gerado.
// 4. O loop `while` continua executando até que `rand` seja igual a 10.
//    - A cada iteração, um novo número aleatório é gerado e exibido no console.