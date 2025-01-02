// filter retorna um novo array com todos os elementos que satisfazem a condição
let alunos = ["Luiz", "Maria", "João"];
let resultado = alunos.filter(nome => nome.length > 4); // Filtra nomes com mais de 4 letras

console.log(resultado); // Exibe: ["Maria"]