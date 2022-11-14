var cajaTxt = document.getElementById('tratamientorec2')

function mostrarTxt() {
    tratamientorec2.style.display = 'block';
}

function cerrar() {
    tratamientorec2.style.display = 'none'
}

if (edad>=18){
    var mostrarDatos = document.getElementById('paciente3')
    paciente3.style.display = 'block';
    var mostrarDatos2 = document.getElementById('tratamientorec3')
    tratamientorec3.style.display = 'block';
    }else{
        alert('Debes ser mayor de 18 años para visualizar el contenido completo')
}


function mostrarContrasena(){
    var tipo = document.getElementById("password1");
    if(tipo.type === "password"){
        tipo.type = "text";
        $('.icon').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill');
        
    }else{
        tipo.type = "password";
        $('.icon').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill');
    }    
}

function mostrarContrasena2(){
    var tipo = document.getElementById("password2");
    if(tipo.type === "password"){
        tipo.type = "text";
        $('.icon2').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill');
        
    }else{
        tipo.type = "password";
        $('.icon2').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill');
    }    
}

function mostrarContrasena3(){
    var tipo = document.getElementById("password3");
    if(tipo.type === "password"){
        tipo.type = "text";
        $('.icon3').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill');
        
    }else{
        tipo.type = "password";
        $('.icon3').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill');
    }    
}
//TENGO QUE SIMPLIFICAR EL CODIGO

