window.onload = function(){
    document.getElementById("boton").addEventListener("click", agregar);
}
function agregar(){
    var tareas = document.getElementById("tareaok").value;
    document.getElementById("tarea").value = ""; //  texto ingresado en textarea y limpia textarea
    var cont = document.getElementById("contenedor"); 
    var chck = document.createElement("input");
    chck.type = "checkbox";
    chck.setAttribute("class", "check");
    var nuevasTareas = document.createElement("div"); //  nodos elementos
    var textoNuevaTarea = document.createTextNode("tareas");
    var elementoContenedor = document.createElement("span");
    elementoContenedor.appendChild(textoNuevaTarea);
    cont.appendChild(nuevasTareas);
    var basura = document.createElement("span");
    basura.classList.add("fa", "fa-trash-o");
    var cora = document.createElement("span");
    cora.classList.add("fa", "fa-corazon");
    //asignamos padres a nodos creados
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(elementoContenedor);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);
    //se agrega un evento al hacer click
    chck.addEventListener("click", function(){
        elementoContenedor.classList.toggle("tachado");
    })
    // se remueve el icono basura 
    basura.addEventListener("click", function(){
        cont.removeChild(nuevasTareas);
    })
    //se crea la funcion click para el corazon y le asignamos la clase red de css
    cora.addEventListener("click", function(){
        cora.classList.toggle("red");
    })
    //se valida que textarea no este vacia al presionar boton aceptar
    if(tareas == null || tareas.length == 0){
        alert("¡Error ! Debe ingresar tarea");
        return false;
    }
}