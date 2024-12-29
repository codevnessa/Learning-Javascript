// O método match retorna um array com os resultados de uma busca por uma expressão regular (regex)

let texto = "Olá, mundo";
console.log(texto.match(/o/gi));  // Retorna ["o", "o"], pois busca todas as ocorrências de "o" (ignorando maiúsculas/minúsculas)