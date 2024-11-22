try {
    let obj = undefined
    console.log(obj.propriedade)
    console.log('Olá mundo')
}catch(erro){
    console.log('[ERRO]')
    console.log(erro)
    erroEncontrado = true
}finally{
    console.log('Finalizar software')
}
console.log('Finalizado')