// Avaliação de Curto-Circuito: Uso prático do operador OR (||)
// Descrição: Define um valor padrão caso o primeiro valor seja falsy.
// Exemplo: let nome = usuario.nome || "Visitante"

let usuario = {
    nome: "",
  };
  
  let nome = usuario.nome || "Visitante";
  console.log(`Nome do usuário: ${nome}`);
  // Explicação: Como "usuario.nome" é uma string vazia (falsy), o valor padrão "Visitante" é retornado.