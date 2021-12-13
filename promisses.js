// não funciona desse jeito...

const fs = require('fs')

const t1 = 'primeiro conteúdo'
const t2 = 'segundo conteúdo'


fs.writeFile('arquivo1.txt', t1).then( () => console.log('escreveu no arquivo1'))   
   
