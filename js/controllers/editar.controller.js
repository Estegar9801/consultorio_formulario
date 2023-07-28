import { personaServices } from "../service/persona-service.js"
import { calculosPersona } from "../controllers/registro.controller.js"
import { validaciones } from "../service/validaciones.js"

const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll(".input-text");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validaciones.valida(input.target);
    });
});


const getInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "/pages/error.html";
    }

    try{
        const perfil = await personaServices.detallePersona(id);
        inputs.forEach((input) =>{
            const tipoCampo = input.dataset.tipo;
            input.value = perfil[tipoCampo];
        });
    }catch(e) {
        window.location.href = "/pages/error.html";
    }
};

getInformacion();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const tipoPersona = form.dataset.form;
    const persona = {tipo: tipoPersona};  
    inputs.forEach((input) => {
        const tipoCampo = input.dataset.tipo;
        persona[tipoCampo] = input.value;
        if (tipoPersona === "Paciente"  && tipoCampo === "fechaNacimiento") {
            persona["edad"] = calculosPersona.calcularEdad(input.value);
        }
    });
    personaServices.actualizarPersona(persona, id).then(() => {
        window.location.href = "../pages/edicion_concluida.html";
    })
    .catch((e) => alert("Ocurrió un error. Intente nuevamente más tarde"));

});