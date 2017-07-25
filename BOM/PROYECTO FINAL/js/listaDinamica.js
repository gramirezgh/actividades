var estudiantes = [
    {"codigo":"020","nombre":"Andres Copa","nota":7,"asistencia":6,"genero":"M"},
    {"codigo":"019","nombre":"Arturo Mendez","nota":7,"asistencia":6,"genero":"M"},
    {"codigo":"018","nombre":"Liliana Carvajal","nota":9,"asistencia":8,"genero":"F"},
    {"codigo":"001","nombre":"Jhoel Martinez","nota":10,"asistencia":9,"genero":"M"}
];

window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("mostrar-tabla").addEventListener("click",mostrarTabla,false);
}

function mostrarTabla() {
     var cuerpoTabla = document.getElementById("equipos-tabla");
     var tablaLlena = "";
     for(var i=0;i<estudiantes.length;i++){
        tablaLlena +="<tr><td>"+estudiantes[i].codigo+"</td><td>"+estudiantes[i].nombre+"</td><td>"+estudiantes[i].nota+"</td></tr>";
     }
     document.getElementById("estudiantes-tabla").innerHTML = cuerpoTabla;
}