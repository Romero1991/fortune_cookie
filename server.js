var http = require('http');
var colors = require('colors');

//cargando configuraciones
var config = require('./config/config');
var IP = 'config.IP';
var PORT = 'config.PORT';

// tema de colors
colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res){// codigo de nuestro server

    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

    res.end('> Server Funcionando');
});

server.listen(PORT,IP,function(){
    console.log(`> Server working @http://${IP}:${PORT}/`.info);
});