const listaPersonas = (tipo) =>
  fetch(`http://localhost:3000/personas/?tipo=${tipo}`).then((respuesta) => respuesta.json());

const eliminarPersona = (id) => {
  return fetch(`http://localhost:3000/personas/${id}`, {
    method: "DELETE",
  });
};

const detallePersona = (id) => {
  return fetch(`http://localhost:3000/personas/${id}`,{
  }).then((response) => response.json())
};

const registrarPersona = ({nombre, apellido, edad, tipo, cedula, fechaNacimiento, telefono, correo, especialidad, consultorio}) => {
  return fetch("http://localhost:3000/personas",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, apellido, edad, tipo, cedula, fechaNacimiento, telefono, correo, especialidad, consultorio }),
  });
};

const actualizarPersona = ({nombre, apellido, edad, tipo, cedula, fechaNacimiento, telefono, correo, especialidad, consultorio }, id) => {
  return fetch(`http://localhost:3000/personas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, apellido, edad, tipo, cedula, fechaNacimiento, telefono, correo, especialidad, consultorio}),
  })
    .then((response) => response)
    .catch((e) => console.log(e));  
};

export const personaServices = {
  listaPersonas,
  registrarPersona,
  detallePersona,
  actualizarPersona,
  eliminarPersona
};