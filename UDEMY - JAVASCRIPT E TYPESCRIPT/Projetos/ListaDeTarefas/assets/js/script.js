function addTarefa(){
    const inputTarefa = document.getElementById('inputTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    if(!inputTarefa.value.trim()) return alert('Por favor, digite uma tarefa!');

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = inputTarefa.value;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => listaTarefas.removeChild(novaTarefa)

    novaTarefa.appendChild(botaoRemover);
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
    inputTarefa.focus();
}

function removerTudo(){
    document.getElementById('listaTarefas').innerHTML = ""
}
/* 

function addTarefa() {
    const input = document.getElementById('inputTarefa');
    if (!input.value.trim()) return alert("Digite uma tarefa!");
    const li = document.createElement('li');
    li.textContent = input.value;
    li.innerHTML += `<button onclick="this.parentElement.remove()">Remover</button>`;
    document.getElementById('listaTarefas').appendChild(li);
    input.value = "";
    input.focus();
}

function removerTudo() {
    document.getElementById('listaTarefas').innerHTML = "";
}


*/