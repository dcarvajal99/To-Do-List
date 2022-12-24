const arrayTasks = [
    {
    "id": 1,
    "task":"Realizar la tarea",
    "status" : false,
    },
    {
    "id": 2,
    "task":"Hacer ejercicios a las 10 am",
    "status" : false,
    },
    {
    "id": 3,
    "task":"Lavarse los dientes despues de cada comida",
    "status" : false,
    }
]

const btnAgregar = document.getElementById("agregar");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
const textbox = document.getElementById("textbox");
const btnModificar = document.getElementById("modificar");
const btnModificarBlue = document.getElementById("modifyBlue");


const showTasks = () =>{
    let contadorTareas= 0;
    let contadorRealizadas= 0;
    let insertar = document.getElementById("insertar")
    let dataTareas =''
    for (task of arrayTasks ){
        dataTareas += `
        <tr>
        <th scope="row">${task.id}</th>
        <td>${task.task}</td>
        <td>  <button onclick="modifyStatusTasks(${task.id})" class="btn ${task.status ? 'btn-success' : 'btn-warning'}" id="modificar">${task.status ? 'Realizada' : 'Pendiente'}</button></td>
        <td><img id="delete" onclick="deleteTasks(${task.id})" src="/assets/image/x.png" alt="eliminar" srcset=""></td>
        <td> <button onclick="modifyTasks(${task.id})"  class="btn" id="modificar">Modificar</button></td>
        </tr>`
        contadorTareas ++;
        if(task.status === true){
            contadorRealizadas++
        }
    }
    insertar.innerHTML = dataTareas;
    total.innerHTML = contadorTareas;
    realizadas.innerHTML = contadorRealizadas;
}
showTasks()

let id = 1;
const addTasks = () =>{
    
    if(textbox.value === ''){
        alert("No ha ingresado ningun valor")
        return
    }
        
        console.log("Se ha añadido una nueva tarea")
        const idtask = arrayTasks.find (task => task.id === arrayTasks.length) 
        if(idtask){
            id = arrayTasks.length + 1
        }
        const newTask ={
            "id" : id,
            "task" : textbox.value,
            "status": false
        }
        arrayTasks.push(newTask);
        showTasks()
}

const modifyStatusTasks = (arrayTasksID) =>{
    const index = arrayTasks.findIndex(task => task.id === arrayTasksID)
    if(arrayTasks[index].status === false){
        arrayTasks[index].status = true
    }else{
        arrayTasks[index].status = false
    }
    showTasks()
}

const deleteTasks = (arrayTasksID) =>{
    const confirmDelete = confirm("Estas seguro de que deseas eliminar esta tarea?");
    if(confirmDelete){
        const index = arrayTasks.findIndex(task => task.id === arrayTasksID)
        arrayTasks.splice(index,1)
    }else{
    }
    showTasks()
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
    showTasks()
    }
});


const modifyTasks = (arrayTasksID) =>{
        const index = arrayTasks.findIndex(task => task.id === arrayTasksID)
        if(textbox.value === ''){
            alert("No ha ingresado ningun valor")
            return
        }
        const confirmModify = confirm("Estas seguro de que deseas MODIFICAR esta tarea?");
        if(confirmModify){
        arrayTasks[index].task = textbox.value
        showTasks()
        return
        }   
}

/* 

eliminar.addEventListener("click", function(){
    console.log("hoadsfgdsg")
    alert("Estas seguro?")
}
)

let eliminar = document.getElementById("delete");

const addTasks = () =>{
    let textbox = document.getElementById("textbox")
    
}
 */