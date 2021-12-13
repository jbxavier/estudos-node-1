const fs = require('fs')

function escreveArquivo() {
    fs.writeFile('./log.txt', 'Aqui vai o texto no arquivo 3', (err)=> {
        if (err) throw err    
        console.log('Arquivo escrito pela função escreveArquivo()')
    })
}

function leArquivo(caminho){
    fs.readFile(caminho, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Texto lido: '+data.toString())
        }
    })
}



escreveArquivo()

leArquivo('./logkkk.txt')

console.log('última linha do código...')