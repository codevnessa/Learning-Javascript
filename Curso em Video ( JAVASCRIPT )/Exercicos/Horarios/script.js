 function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var section = document.querySelector('section'); 
  // var hora = data.getHours()
  var hora = 18
    msg.innerHTML = `${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e79f8a'
        section.style.background = "#ddc2ba";
        msg.style.color ='#e79f8a'
        msg.innerHTML += '🌤️'
        
    } else if (hora >= 12 && hora < 18){
          //BOA TARDE
          img.src = 'imagens/tarde.jpg'
          msg.style.color = '#4e8ab3'
          msg.innerHTML += ' ☀️'
    } else {
            //BOA NOITE
            img.src = 'imagens/noite.jpg'
            document.body.style.background = '#081947'
            section.style.background = "#556caa"
            msg.style.color = '#081947'
             msg.innerHTML += ' 🌙'
    }
      
 }       