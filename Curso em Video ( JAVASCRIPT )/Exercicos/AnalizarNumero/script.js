let num = document.getElementById('txtn')
let res = document.getElementById('res')
let lista = document.querySelector('select#selana')
let valores = []

function isNumber(num){
    if (Number(num) >= 1 && Number(num) <= 100){
      return true
    } else{
      return false
    }
}

function inLista(num, lista){
   if (lista.indexOf(Number(num)) != -1){
    return true
   }else{
    return false
   }
} 

function adicionar(){
  if(isNumber(num.value)  && !inLista(num.value, valores)){
    valores.push(Number(num.value))

    let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        num.value = '';
        num.focus();
  }else{
    window.alert('Valor invalido ou já foi adicionado!')
  }
  num.value = ''; //gera mais fluidez, assim que eu digitaar um numero que já foi add, o campo vai ficar vazio
  num.focus(); // e usando esse o campo além de ficar vazio, vai ser focado aqui pro usuario, poder já escrever sem clicar na propriedade
}


function analizador(){
  if(valores.length === 0){
    window.alert('Adicione valores antes de finalizar!')
  }else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    /*let maior = Math.max(...valores) // spread(...) é uma forma nao semantica
    let menor = Math.min(...valores)
    let soma = valores.reduce((acc, val) => acc + val, 0)*/
    let media = 0
    for(let pos in valores){ //forma semantica
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      if(valores[pos] < menor)
        menor =  valores[pos]
      }
   
        media = soma / total

       res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
  } 
}