//importando la bibliotecas
const express = require('express'); 
const morgan = require('morgan');

var app = express(); //instancia de express
app.use(morgan('dev'));

const puerto = 1002; //se define el puerto para correr la app (> 1000)
//metodo get inicial con la ruta '/'
app.get('/', function(req,res){
	res.sendfile('index.html');
	//res.send("Hola amiguitos");
});

app.get('/home', function(req,res){
	res.send("Hola amiguitos, estamos en home");
});

app.listen(puerto, function(){
	console.log("Hola mundo");
}); //escuche por este puerto

