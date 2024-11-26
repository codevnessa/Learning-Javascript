async function buscarDados() {
    console.log("Buscando dados...");

    const resposta = await fetch("https://api.exemplo.com/dados");
    const dados = await resposta.json();

    console.log("Dados recebidos:", dados);
}

