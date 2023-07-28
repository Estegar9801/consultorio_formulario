import { personaServices } from "../service/persona-service.js"

const seccion = document.querySelector("[data-section]");

const crearNuevaLinea = ({ nombre, apellido, id, correo, consultorio, telefono, especialidad }) => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="info-header id="${id}">
        <h3 class="info-title">${nombre} ${apellido}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16" id=${id}>
            <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" id=${id}>
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" id="${id}">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
    </div>
    <table class="info-table" id=${id}>
        <tr class="info-row">
            <th class="info-column info-column-title">Nombres</th>
            <th class="info-column info-column-content">${nombre}</th>
        </tr>
        <tr class="info-row">
            <th class="info-column info-column-title">Apellidos</th>
            <th class="info-column info-column-content">${apellido}</th>
        </tr>
        <tr class="info-row">
            <th class="info-column info-column-title">Consultorio</th>
            <th class="info-column info-column-content">${consultorio}</th>
        </tr>
        <tr class="info-row">
            <th class="info-column info-column-title">Teléfono</th>
            <th class="info-column info-column-content">${telefono}</th>
        </tr>
        <tr class="info-row">
            <th class="info-column info-column-title">Correo</th>
            <th class="info-column info-column-content">${correo}</th>
        </tr>
        <tr class="info-row">
            <th class="info-column info-column-title">Especialidad</th>
            <th class="info-column info-column-content">${especialidad}</th>
        </tr>
    </table>`;
    linea.innerHTML = contenido;

    const desplegarBoton = linea.querySelector(".bi-caret-down-square");
    const ocultarBoton = linea.querySelector(".bi-caret-up-square");
    const tabla = linea.querySelector(".info-table");
    const editarBoton = linea.querySelector(".bi-pencil-square");
    const eliminarBoton = linea.querySelector(".bi-trash3");

    desplegarBoton.addEventListener("click", () => {        
        tabla.style.display = "block";   
        desplegarBoton.style.display = "none";
        ocultarBoton.style.display = "block";
    });

    ocultarBoton.addEventListener("click", () => {
        tabla.style.display = "none";
        desplegarBoton.style.display = "block";
        ocultarBoton.style.display = "none";       
    });

    editarBoton.addEventListener("click", () => {
        window.location.href = `../pages/editar_doctor.html?id=${id}`;
    });

    eliminarBoton.addEventListener("click", () => {
        personaServices.eliminarPersona(id).then((response) => {
            console.log(response);
        }).catch(e => alert("Ha ocurrido un error. " + e));
    });

    return linea;
};

const crearLineaVacio = () => {
    const linea = document.createElement("div");
    const contenido = "No se encuentra ningún doctor registrado."    
    linea.innerHTML = contenido;
    return linea;
};

personaServices.listaPersonas("Doctor")
    .then((data) => {
        if(data.length !== 0){
            data.forEach((datos) => {
                const nuevaLinea = crearNuevaLinea(datos);
                seccion.appendChild(nuevaLinea);
            });
        }else{
            const nuevaLinea = crearLineaVacio();
            seccion.appendChild(nuevaLinea);
        }        
    }).catch((e) => alert("Ocurrió un error. Intente nuevamente más tarde." + e));