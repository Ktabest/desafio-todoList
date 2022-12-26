let registroTareas = []
let nuevaTarea = document.querySelector('#nueva-tarea').value
let agregarTarea = document.querySelector('#agregar-tarea')
const realizadas1 = 0


const listadoTareas = () => {
    const lista = document.querySelector('#listaTareas tbody')
    const realizadas1 = 0
    lista.innerHTML = ''
    for (const tarea of registroTareas) {
        if (nuevaTarea.status) {
            realizadas1 = realizadas1 + 1;
        }
        lista.innerHTML += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type= "checkbox" onclick ="realizadas(" ><button onclick ="borrarTarea()">X</button></td>
        </tr>
        `
        const total = document.querySelector('#total-tareas')
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

const realizadas = (ticket) => {
    let marcar = nuevoArreglo.findIndex((tarea) => tarea.ticket === ticket)
    if (registroTareas[marcar].status === false) {
        registroTareas[marcar].status = true;
    }
    else {
        registroTareas[marcar].status = false
    }
}
