var http = require('http')
var data = require('./retornaData.js')
var url = require('url')

http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'text/html'})
    var q = url.parse(req.url, true).query
    var txt = q.year + " " + q.month +" ,"+ q.day
    //res.write('Data e Hora atual: '+ data.retornaData())
    res.end(txt)
}).listen(8080)

console.log('Servidor is on!')
