var http = require('http');
var colors = require('colors');
var fs = require('fs');

//cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;

// tema de colors
//colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res){// codigo de nuestro server

    res.writeHead(200,{
        'Content-Type':'text/html'
    });

fs.readFile('./static/index.html','utf8', 
function(err, Content){
    if(err){
    console.log(`> Error al leer archivo: ${err}`);
    res.writeHead(500,{
        'Content-Type':'text/plain'
    });
    res.end("Error 500: Iternal Error...");
}else{
    //TODO: si sirve el archivo
}

});
    
});

server.listen(PORT,IP, function(){
    console.log(`> Server working @http://${IP}:${PORT}/`)
});