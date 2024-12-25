// let e const - Escopo de bloco

// 'let' e const tem escopo de bloco. Isso significa que só são acessíveis dentro do bloco onde foram declaradas 

function exemploLetConst(){
    let a = 10; // a só existe dentro desta função
    const b = 20; // b só existe dentro desta função

    if (true){
        let c = 30; // c só existe dentro deste bloco if
        const d = 40; // 'd' só existe dentro deste bloco if
        console.log(c); // 30
        console.log(d); // 40
    }
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // Erro: 'c' não está definido fora do bloco if
    console.log(d); // Erro: 'd' não está definido fora do bloco if
}

exemploLetConst();