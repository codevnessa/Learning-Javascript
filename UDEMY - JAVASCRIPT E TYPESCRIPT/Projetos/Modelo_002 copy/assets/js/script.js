const txt = document.querySelector('.texto');
const ps = txt.querySelectorAll('p');
const container = document.querySelector('.container')

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;
console.log(backgroudColorBody);
const containerColor = getComputedStyle(container).color;
console.log(containerColor)

for ( let p of ps){
    p.style.backgroundColor = backgroudColorBody
    p.style.color = "#FFF"; 
}