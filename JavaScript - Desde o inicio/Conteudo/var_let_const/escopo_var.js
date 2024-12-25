//var - Escopo de função ou escopo global
// 'var' tem escopo da função. Isso significa que se for declarada dentro de uma função, só será acessível dentro dessa função. Se for declarada fora de uma função será global

function exemploVar(){
    var x = 10; // x só existe dentro dessa função
    if (true){
        var y = 20; // y é também acessível fora do bloco if, porque var nao tem escopo de bloco
    }
    console.log(x); // 10
    console.log(y); // 20
}

exemploVar();
console.log(x); // Erro: x nao está definida fora da função