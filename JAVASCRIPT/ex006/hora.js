var hora = 15
var hj = new Date()
var hoje = hj.getHours()
var agora = new Date();
var diaDaSemana = agora.getDay();
var dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];//  Ele retorna um número de 0 a 6, onde 0 é domingo e 6 é sábado.
console.log(`Hoje é ${dias[diaDaSemana]}`);
console.log(`Agora sao exatamente ${hoje} horas`)
if(hora >= 0 && hora<= 4){
    console.log('O galo canta daqui a pouco')
}else if(hora >= 5 && hora <= 12){
    console.log(`UM BOM DIA PARA VOCE`)
}else if(hora >= 13 && hora <= 18){
    console.log(`BOA TARDE PESSOAL`)
}else if(hora >=19 && hora <=24){
    console.log(`BOA NOITEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE`)
}