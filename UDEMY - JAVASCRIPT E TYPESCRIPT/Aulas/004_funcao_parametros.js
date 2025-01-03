/*function funcao(a,b = 0,c = 0, d = 0){
     console.log(a + b + c + d)
}
funcao(1,2,3,4)

const vazio = 0;
function funcao(a = vazio, b = vazio, c = vazio){
    console.log(a + b + c)
}
funcao(1,2,8)
*/

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Vanessa', sobrenome: 'Rosa', idade: 22 };
funcao(obj); 

function funcao1([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}

let arr = ['Vanessa', 'Rosa', 22];
funcao1(arr);

function funcao2([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}

let arr1 = ['Vanessa', 'Rosa', 22];
let obj1 = {nome: arr[0], sobrenome: arr[1], idade: arr[2]}