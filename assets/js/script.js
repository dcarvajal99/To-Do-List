/* 
const btnAgregar = document.getElementById("agregar");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
const checkbox = document.getElementById("checkbox");
 */
let id = 4;
const arrayTasks = [
    {
    "id": 1,
    "task":"Realizar la tarea",
    "status" : true,
    },
    {
    "id": 2,
    "task":"Hacer ejercicios a las 10 am",
    "status" : true,
    },
    {
    "id": 3,
    "task":"Lavarse los dientes despues de cada comida",
    "status" : true,
    }
]


const mostrarTareas = () =>{
    let contador = 0;
    let insertar = document.getElementById("insertar")
    let dataTareas =''
    for (task of arrayTasks ){
        dataTareas += `
        <tr>
        <th scope="row">${task.id}</th>
        <td>${task.task}</td>
        <td>  <input class="form-check-input" type="checkbox" value="" id="check"></td>
        <td><img src="/assets/image/x.png" alt="eliminar" srcset=""></td>
        <td class="col-1 text-black-50"><button class="btn" id="modificar">Modificar</button></td>
        </tr>`
        contador ++;
    }
    insertar.innerHTML = dataTareas;
}
mostrarTareas()

const validarTexto = () =>{
    let textbox = document.getElementById("textbox").value;
    if(textbox === ''){
        alert("No ha ingresado ningun valor")    
    }else{
        
    }
}

const agregarTareas = () =>{
    let textbox = document.getElementById("textbox")
    
}




