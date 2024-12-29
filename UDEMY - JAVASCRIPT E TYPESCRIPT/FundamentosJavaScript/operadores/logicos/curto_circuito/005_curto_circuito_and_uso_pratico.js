// Avaliação de Curto-Circuito: Uso prático do operador AND (&&)
// Descrição: Executa uma ação apenas se a condição for verdadeira.
// Exemplo: usuario.logado && usuario.exibirMensagem()

let usuario = {
    logado: true,
    exibirMensagem: function () {
      return "Bem-vindo!";
    },
  };
  
  let mensagem = usuario.logado && usuario.exibirMensagem();
  console.log(`Mensagem: ${mensagem}`);
  // Explicação: Como "usuario.logado" é true, a função "exibirMensagem" é executada e retorna a mensagem.