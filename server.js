var http = require('http');
//var colors = require('colors');

//cargando configuraciones
var config = require('./config/config');
var IP = 'config.IP';
var PORT = 'config.PORT';

// tema de colors
//colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res){// codigo de nuestro server

    res.writeHead(200,{
        'Content-Type':'text/html'
    });
res.write('<h1> mi sistema asombroso</h1>');
res.write(`<script> var saludo = function(){alert("hola");}</script>`);
res.write('<button onclick="saludo()"> SALUDAR</button>');

    res.end('> Server Funcionando');
});

server.listen(PORT,IP,function(){
    console.log(`> Server working @http://${IP}:${PORT}/`.info);
});