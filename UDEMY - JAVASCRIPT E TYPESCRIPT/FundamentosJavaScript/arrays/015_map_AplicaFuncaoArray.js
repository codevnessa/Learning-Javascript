// map cria um novo array aplicando uma função a cada elemento do array original
let alunos = ["Luiz", "Maria", "João"];
let resultado = alunos.map(nome => nome.toUpperCase()); // Converte todos os nomes para maiúsculas

console.log(resultado); // Exibe: ["LUIZ", "MARIA", "JOÃO"]