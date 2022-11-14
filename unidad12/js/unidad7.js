var nombreUsuario = prompt('Ingrese su nombre')
var edad = prompt('Ingrese su edad')

alert('Bienvenid@! ' + nombreUsuario)

function cuestionario() {
    var servicio = prompt('Ingrese un número para alguna de las opciones: \n 1.- Masajes descontracturantes \n 2.- Masajes neuromusculares \n 3.- Drenaje linfático');
if(servicio<=3 && servicio>0){    
    lugarResidencia = prompt('Indique su lugar de residencia')    
    }else{
        alert('Por favor ingrese un numero del 1 al 3')
}
}


