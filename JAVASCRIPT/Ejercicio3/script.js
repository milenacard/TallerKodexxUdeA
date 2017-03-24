var contador = 0;
var aux = 0;
var aux2 = 0;
var numero

function empezarDetener(elemento) 
{

setInterval(funcionando, 1000);
            
funcionando()	
 
    
}

function funcionando()
	{
    contador = contador + 1
        
    segundos = contador % 60
    aux = agregarCero(segundos)
    document.getElementById('crono').innerHTML = "00:00:" + aux;     
     
    
    minutos = contador / 60
    if (minutos = 1){
    aux2 = agregarCero(minutos)
    document.getElementById('crono').innerHTML = "00:" + aux2 + ":" + aux; 
    }else {
        
    }

}
function agregarCero (numero) {
    if (numero < 10){
        numero = "0" + numero
        
    }
        return numero
}
 
