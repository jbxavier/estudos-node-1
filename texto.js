const texto = 'Cabeça de anu é uma pedida muito utilizada na ilha da magia!'

const lerTexto = function (texto){
    // o throw interrompe a execução do programa
    // !texto traz um retorno booleano
    if (!texto) throw 'texto não definido'
    if (typeof texto !== 'string') throw 'tipo de dado inválido, string esperado'
    for (let i = 0; i < texto.length; i++){
        console.log(texto.charAt(i))
    }
}

// utilizamos o try/catch para no caso de um erro 
//levantado por throw, o sistema possa continuar...
try{
    lerTexto(10) // forçamos o erro passando número
}catch (e){
    console.log('Erro na passagem: '+e)
}

lerTexto(texto)