/**
 * Resumo: Este código mostra como criar e manipular strings, que são sequências de caracteres usadas para representar texto.
 * Uso prático: Use strings para armazenar e manipular texto, como mensagens, nomes, ou qualquer dado textual.
 */

// Criando uma string com aspas duplas
let mensagem = "Olá, mundo!";
console.log(mensagem); // "Olá, mundo!"

// Criando uma string com aspas simples
let linguagem = 'JavaScript';
console.log(linguagem); // "JavaScript"

// Concatenando strings
let saudacao = mensagem + " Eu estou aprendendo " + linguagem + ".";
console.log(saudacao); // "Olá, mundo! Eu estou aprendendo JavaScript."

// Acessando caracteres individuais
let primeiroCaracter = mensagem[0];
console.log(primeiroCaracter); // "O"

// Comprimento da string
let comprimento = mensagem.length;
console.log(comprimento); // 12