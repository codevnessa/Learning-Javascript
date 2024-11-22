function formulario(){
    var data = new Date()//data atul
    var ano = data.getFullYear()//pega os quatro digitos
    var fano = document.getElementById('anoDigitado')//ano que veio do formulario
    var res =  document.querySelector('div#res')
    if (fano.value.length == 0 || fano.
        value > ano){// verifica se o valor foi igual a zero || verifica se o valor é maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - fano.value
       // res.innerHTML = Idade calculada: ${idade} teste sempre o codigo para 
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')//como se tivesse escrito isso no html, mas pelo js
            if (fsex[0].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'imagens/adolescentef1.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemadulta.png')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'imagens/adulta.png')
            }else{
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }else if(fsex[1].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 13){
                 //criança
                 img.setAttribute('src', 'imagens/adolescentem1.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemadulto.png')
            }else if(idade < 50){
                 //adulto
                 img.setAttribute('src', 'imagens/adulto.png')
            }else{
                 //idoso
                 img.setAttribute('src', 'imagens/idoso.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
       res.appendChild(img)
}
}
