
const os = require('os')

//const memLivre = os.freemem()
//const memTotal = os.totalmem()




setInterval(() => {
    // estraindo de os e atribuindo as variáveis freemem e totalmem 
    const { freemem, totalmem } = os

    const livre = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const percentualUsado = parseInt((livre / total) * 100)

    const stats = {
        free: `${livre} MB`,
        total: `${total} MB`,
        percents: `${percentualUsado}%`
    }

    console.clear()
    console.table(stats)
}, 1000);