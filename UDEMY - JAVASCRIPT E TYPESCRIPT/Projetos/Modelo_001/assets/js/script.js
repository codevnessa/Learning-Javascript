 // Criar um array de objetos
 // Cada objetos tem duas propriedades tag(o tipo de element, etc.)e text(o texto que vai dentro do elemento)
const elementos = [
    {tag: 'p', text: 'Vanessa Rosa Ferreira Cruz'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'}
];

// Seleciona o local da pagina onde vai ser inserido os elementos criados
// Usar o document.querySelector para selecionar um elemento com a classe container
const container = document.querySelector('.container')

// Criar uma div que vai agrupar todos os elementos
const div = document.createElement('div')

// Usar um loop for para percorrer cada objeto no arrays elementos
// Para cada obnjeto, criamos o elemento HTML na propriedade tag e adicionar o texto na propriedade text
// E assim adicionar o elemento criado dentro da div que foi criada
for(let i = 0; i < elementos.length; i++){
    const {tag, text} = elementos[i]; // Desestruturação do objeto
    const elementoCriado = document.createElement(tag);
    elementoCriado.innerText = text; // Adiciona o texto ao elemento
    div.appendChild(elementoCriado); // adiciona o elemento á div
}

// Adicionar a div, que agora tem todos os elemntos criado ao conteiner que foi selecionado inicio
container.appendChild(div);

// Quando  executar esse código, ele vai criar os elementos HTML 
// especificados no array elementos,adicionar o texto dentro deles 
// e inserir tudo dentro de uma div que será adicionada ao contêiner na página