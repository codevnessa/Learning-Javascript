// Usando .toFixed() para arredondar e resolver a imprecisão
let resultado = (0.7 + 0.1).toFixed(2); // Arredonda para 2 casas decimais

console.log(resultado); // Exibe: "0.80" (uma string)

// Multiplicando por 10, realizando a conta e depois dividindo por 10
let resultado2 = ((0.7 * 10 + 0.1 * 10) / 10); // Evita a imprecisão

console.log(resultado2); // Exibe: 0.8