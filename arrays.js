const frutas = ['maça', 'banana', 'laranja', 'morango'];

//mostra todos os elementos em lista; com atribuição no console.log
frutas.forEach((frutas, index) => {
    console.log(`Fruta ${index + 1}: ${frutas}`);
  });
 /* Fruta 1: maça
    Fruta 2: banana
    Fruta 3: laranja
    Fruta 4: morango*/


//mostra todos os elementos em lista; mais direto
frutas.forEach((frutas) => console.log(frutas));
    /*maça
    banana
    laranja
    morango*/


//Cria uma nova lista com elementos que tenha mais de x letras
const longFrutas = frutas.filter(frutas => frutas.length > 5); 
console.log(longFrutas)
// ['banana', 'laranja', 'morango']


// Cria uma nova lista pra mostrar o numero de letras de cada elemento
const frutasLengths = frutas.map(frutas => frutas.length);
console.log(frutasLengths)
//[ 4, 6, 7, 7 ]

// Adiciona mais elementos aos arrays
const maisFrutas = ['pera', 'manga'];
const todasFrutas = frutas.concat(maisFrutas);
console.log(todasFrutas)
//[ 'maça', 'banana', 'laranja', 'morango', 'pera', 'manga' ]

//Encontrar o primeiro elemento com tal letra
const EncontrarFruta = frutas.find(frutas => frutas.startsWith('l')); 
console.log(EncontrarFruta)
//laranja
