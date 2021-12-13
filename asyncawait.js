const fs = require('fs')

const t1 = 'texto do primeiro arquivo'
const t2 = 'texto do segundo arquivo'

async function escreve(){
    const resp1 = await fs.writeFile('arquivo1.txt', t1, () => console.log('escrita do 1 arquivo...'))
    const resp2 = await fs.writeFile('arquivo2.txt', t2, () => console.log('escrita do 2 arquivo...'))
    console.log('última instrução do código...')
}

escreve()

