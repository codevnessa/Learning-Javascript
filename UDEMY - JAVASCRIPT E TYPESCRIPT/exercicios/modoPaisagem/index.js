const lista = [1280, 1024, 2560, 1440, 3840, 768, 720, 1080, 1600, 1440]
function sortearNumero(lista){
    const i = Math.floor(Math.random()*lista.length);
    return lista[i];
}
const larg = sortearNumero(lista);
const alt = sortearNumero(lista);
function ePaisagem(larg,alt){
    console.log(`A resolucão de ${larg}x${alt}`)
    if (larg > alt) {
        console.log("Está configurada no modo paisagem!")
    }if (larg == alt) {
        console.log("Está configurada no modo quadrado!")
    }else{
        console.log("Não está configurada no modo paisagem!")
        
    }}

ePaisagem(larg,alt)