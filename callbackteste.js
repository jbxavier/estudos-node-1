const fs = require('fs')

const texto = 'Será escrito no primeoro arquivo'
const texto2 = 'Conteúdo do segundo arquivo'

fs.writeFile('callback1.txt', texto, () => console.log('terminou execução do primeiro arquivo'))

fs.writeFile('callback2.txt', texto2, () => console.log('terminou execução do segundo arquivo'))

// apesar de ser a última instrução, será a primeira a ser
// escrita no console, pois finaliza execução primeiro
// execução não fica presa nas funções de escrita, pois 
// Node trabalha de forma assíncrona, segue o fluxo sem travar!!!
console.log('último pedaço de códio para executar...')