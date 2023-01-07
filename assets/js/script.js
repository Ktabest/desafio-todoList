let registroTareas = [];
let nuevaTarea = document.querySelector('#nueva-tarea').value;
const total = document.querySelector('#total-tareas');
const totalRealizadas = document.querySelector('#tareas-realizadas');
let btnAgregarTarea = document.querySelector('#agregar-tarea');

const listadoTareas = () => {
    const lista = document.querySelector('#listaTareas tbody');
    let realizadas = 0;
    html = '';
    for (let tarea of registroTareas) {
        if (tarea.status) {
            realizadas++;
        }
        html += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type= "checkbox" onclick = "tareasRealizadas(${tarea.status})"><button onclick ="borrarTarea(${tarea.id})">X</button></td>
        </tr>
       `
       nuevaTarea = '';
    }
   
    lista.innerHTML = html;
    total.innerHTML = registroTareas.length;
    totalRealizadas.innerHTML = realizadas;
}

const tareasRealizadas = (status) => {
    let checked = registroTareas.findIndex((tarea) => tarea.status === status)
    if (registroTareas[checked].status === false) {
        registroTareas[checked].status = true;
    }
    else {
        registroTareas[checked].status = false;
    }
    listadoTareas();
}

const borrarTarea = (tareaId) => {
    let borrar = registroTareas.findIndex((item) => item.tareaId === tareaId)
    registroTareas.splice(borrar, 1);
    listadoTareas();
}

btnAgregarTarea.addEventListener("click", () => {
    let nuevaTarea = document.querySelector('#nueva-tarea').value
    if (nuevaTarea === '') {
        return alert("agregar tarea");
    }
    registroTareas.push({ id: Date.now(), nombre: nuevaTarea, status: false });

    listadoTareas();
});

