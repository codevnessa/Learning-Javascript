function tabuada(){
   let num= document.getElementById('txtn')
   let tab = document.getElementById('seltab')
   if(num.value === "" ){
     window.alert('[ERRO} Por favor digite um numero')
    }else{
     let n = Number(num.value) 
     let c = 0
     tab.innerHTML = ''
    while (c <=10){
     let item = document.createElement
     ('option')
     item.text = `${c} x ${n} = ${n*c}`
     tab.value = `tab ${c}`
     tab.appendChild(item)
     c++
    }
  }

}