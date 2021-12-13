const dataAlarme = new Date('2021-12-11 19:02:00')

console.log('Iniciando o app')

var temporizador = setInterval(() => {
    console.clear()
    let data = new Date()
    let time = data.toLocaleTimeString()
    console.log(time)

    if (data.getTime() > dataAlarme.getTime()){
        console.log('Disparou alarme!')
        clearTimeout(temporizador)
    }
}, 1000)

console.log('Finalizando o app')