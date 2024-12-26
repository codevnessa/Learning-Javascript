// O método search retorna o índice da primeira ocorrência de uma expressão regular (regex). Se não encontrar, retorna -1

let texto = "Olá, mundo";
console.log(texto.search(/o/i));  // Retorna 1, pois a primeira ocorrência de "o" (ignorando maiúsculas/minúsculas) está no índice 1