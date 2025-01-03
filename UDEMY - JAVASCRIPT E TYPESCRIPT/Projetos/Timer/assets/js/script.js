const stop = document.querySelector('.stop').addEventListener('click', stopClock);
const start = document.querySelector('.start').addEventListener('click', startClock);
const pause = document.querySelector('.pause').addEventListener('click', pauseClock);
const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

let intervalId;

// DATE
function showDate(){
    const now = new Date();
    const day = now.toLocaleDateString('pt-BR')
    date.textContent = day
}


// TIME 
function showTime(){
    const now = new Date();
    const hour = now.toLocaleTimeString('pt-BR');
    clock.textContent = hour
}

function startClock(){
    if (intervalId) return;
    showTime();a
    intervalId = setInterval(showTime, 1000);
    console.log('CLicou no iniciar!')
    clock.classList.remove('stop')
    clock.classList.remove('pause')
    clock.classList.add('start')

}

function pauseClock(){
    clearInterval(intervalId);
    intervalId = null;
    console.log('CLicou no pausar!')
    clock.classList.add('pause')

    
}

function stopClock(){
    clearInterval(intervalId);
    intervalId = null;
    clock.textContent = "00:00:00"
    console.log('CLicou no parar!')
    clock.classList.remove('pause')

    clock.classList.add('stop')

   
}


showDate()
showDate()