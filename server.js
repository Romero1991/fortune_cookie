var http = require('http');
var colors = require('colors');
var fs = require('fs');
var mime = require('mime');
var path = require('path');

//cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;
// tema de colors
//colors.setTheme(config.color_theme);
var server = http.createServer(function (req, res) {
    //extrayendo el path de la URL
    var urlpath = req.url;
    // normalizando el path 
    if(urlpath==="/"){
        urlpath =path.resolve("./static/index.html");
    }else {
        urlpath = path.resolve('./static'+urlpath);
    }
    console.log(`>Recusrso Solicitado: ${urlpath}`);
    // Decidiendo el conetent-Type enfuncion de la extencion del archivo solicitado
    var mimeType = mime.lookup(urlpath);
    
    fs.readFile(urlpath,
        function (err, Content) {
            if (err) {
                console.log(`> Error al leer archivo: ${err}`);
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end("Error 500: Iternal Error...");
            } else {
                //TODO: si sirve el archivo
                res.writeHead(200,{
                    'Content-Type':mimeType
                });


                console.log(`>Se sirve el archivo: ${path}`);
                res.end(Content);
            }
      });
});
server.listen(PORT, IP, function () {
    console.log(`> Server working @http://${IP}:${PORT}/`)
});