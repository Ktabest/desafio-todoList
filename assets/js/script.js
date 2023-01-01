let registroTareas = []
let nuevaTarea = document.querySelector('#nueva-tarea').value
let agregarTarea = document.querySelector('#agregar-tarea')
const realizadas1 = 0



const listadoTareas = () => {
    const lista = document.querySelector('#listaTareas tbody')
    let realizadas1 = 0
     lista.innerHTML = ''
    for (let tarea of registroTareas) {
        if (tarea.status) {
            realizadas1++;
        }
        lista.innerHTML += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type= "checkbox" id= "checkboxes" onclick = "tareasRealizadas()"  ><button onclick ="borrarTarea()">X</button></td>
        </tr>
        `
       nuevaTarea = ''
   
        const total = document.querySelector('#total-tareas');
        total.innerHTML = registroTareas.length
        const totalRealizadas = document.querySelector('#tareas-realizadas')
        totalRealizadas.innerHTML = realizadas1

    }
}

agregarTarea.addEventListener("click", function () {
    let nuevaTarea = document.querySelector('#nueva-tarea').value
    if (nuevaTarea === '') {
       return alert("agregar tarea");
    }
    registroTareas.push({ id: Date.now(), nombre: nuevaTarea, status: false });

    nuevaTarea = ''

    listadoTareas();
})

const borrarTarea = (nombre) => {
    let borrar = registroTareas.findIndex((item) => item.nombre === nombre)
    registroTareas.splice(borrar, 1);
    listadoTareas();
}
listadoTareas();

const tareasRealizadas = (estado) => {
    let checked = registroTareas.findIndex((tarea) => tarea.estado === estado)
    if (registroTareas[checked].status === false) {
        registroTareas[checked].status = true;
    }
    else {
        registroTareas[checked].status = false
    }
}

