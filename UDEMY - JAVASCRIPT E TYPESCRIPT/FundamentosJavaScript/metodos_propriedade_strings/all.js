let texto = " Olá, mundo! Bem-vindo ao mundo do JavaScript. ";

// Aplicando todos os métodos em sequência
let resultado = texto
  .trim() // Remove espaços no início e no final: "Olá, mundo! Bem-vindo ao mundo do JavaScript."
  
  .toLowerCase() // Converte para minúsculas: "olá, mundo! bem-vindo ao mundo do javascript."

  .replaceAll("mundo", "universo") // Substitui todas as ocorrências de "mundo" por "universo": "olá, universo! bem-vindo ao universo do javascript."

  .concat(" Vamos aprender!") // Concatena uma nova string: "olá, universo! bem-vindo ao universo do javascript. vamos aprender!"

  .slice(0, 50) // Extrai os primeiros 50 caracteres: "olá, universo! bem-vindo ao universo do javascrip"

  .split(", ") // Divide a string em um array usando ", " como separador: ["olá", "universo! bem-vindo ao universo do javascrip"]

  .join(" | ") // Junta o array em uma string com " | " como separador: "olá | universo! bem-vindo ao universo do javascrip"
  
.toUpperCase(); // Converte para maiúsculas: "OLÁ | UNIVERSO! BEM-VINDO AO UNIVERSO DO JAVASCRIP"

console.log("Resultado final:", resultado);