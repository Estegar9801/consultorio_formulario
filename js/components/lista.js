const iconoDesplegar = document.querySelectorAll(".bi-caret-down-square");

const registrarBoton = (n) => {
    if(n === 0){
        window.location.href = "../pages/registro_pacientes.html";
    }else{
        window.location.href = "../pages/registro_doctores.html";
    }    
}