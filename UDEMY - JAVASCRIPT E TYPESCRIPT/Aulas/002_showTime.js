function showTime(){
    const now = new Date();
    console.log(now.toLocaleTimeString('pt-BR'));
}

const intervalID = setInterval(showTime,1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log('Intervalo parado')
}, 20000);