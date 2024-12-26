// entries retorna um iterador com pares [índice, valor] para cada elemento do array
let alunos = ["Luiz", "Maria"];
let iterador = Array.from(alunos.entries()); // Converte o iterador em array

console.log(iterador); // Exibe: [[0, "Luiz"], [1, "Maria"]]