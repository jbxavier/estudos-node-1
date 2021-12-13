var menu = require('./helpprocess')
// copiando a partir do segundo elemento do array
// 1 posição: node e 2 posição: path do arquivo... ficam de fora
const parametros = process.argv.slice(2)

if (parametros.length < 1) {
    console.log('Uma opção abaixo dever ser passada como parâmetro:')
    menu.showOptions()
    return
}


switch (parametros[0]) {
    case 'a':
        console.log('pid: ' + process.pid)
        break;
    case 'b':
        console.log('title: ' + process.title)
        break;
    case 'c':
        console.log('arch: ' + process.arch)
        break;
    case 'd':
        console.log('platform: ' + process.platform)
        break;

    default:
        menu.showOptions()
        break;
}


//console.log(parametros)