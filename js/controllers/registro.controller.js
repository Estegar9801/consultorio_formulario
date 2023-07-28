import { personaServices } from '../service/persona-service.js'
import { validaciones } from "../service/validaciones.js"

const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll(".input-text");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validaciones.valida(input.target);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tipoPersona = form.dataset.form;
    const persona = {tipo: form.dataset.form, id: uuid.v4(), edad:0, fechaNacimiento:"1900/01/01", consultorio:0};
    inputs.forEach((input) => {
        const tipoCampo = input.dataset.tipo;
        persona[tipoCampo] = input.value;
        if (tipoPersona === "Paciente"  && tipoCampo === "fechaNacimiento") {
            persona["edad"] = calcularEdad(input.value);
        }
    });
    personaServices.registrarPersona(persona).then(() => {
        window.location.href = "../pages/registro_exitoso.html";
    })
    .catch((e) => alert("Ocurrió un error. Intente nuevamente más tarde"));
});

const calcularEdad = (fecha) => {
  let hoy = new Date();
  let fechaNacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  return edad;
}

export const calculosPersona = {
    calcularEdad,
};