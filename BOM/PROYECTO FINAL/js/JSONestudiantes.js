
function leerJSON(json){
  for (var i = 0; i < json.length; i++) {
    var table = document.getElementById("tabla");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = json[i].codigo;
    cell2.innerHTML = json[i].nombre;
    cell3.innerHTML = json[i].nota;
    cell4.innerHTML = json[i].asistencia;
    cell5.innerHTML = json[i].genero;
  }
}

function mostrarJSON(){
  leerJSON(estudiantes);
}


function promedio(json){
  var p = 0;
  var q = 0;
  var r = 0;
  var i;
  for (var i = 0; i < json.length; i++) {
    p = json[i].nota;
    j = i+1;
    q = (q+p);
    r = Math.round(q/j);
  }
   alert("El promedio de notas es : "+r);
  // document.getElementById('b').innerHTML = r;
}

function notaPromedio(){
  promedio(estudiantes);
}

function mayor(json){
  for (var i = 0; i < json.length; i++) {
     if(
       (json[i].nota >= json[0].nota)&&
       (json[i].nota >= json[1].nota)&&
       (json[i].nota >= json[2].nota)&&
       (json[i].nota >= json[3].nota)&&
       (json[i].nota >= json[4].nota)&&
       (json[i].nota >= json[5].nota)&&
       (json[i].nota >= json[6].nota)&&
       (json[i].nota >= json[7].nota)&&
       (json[i].nota >= json[8].nota)&&
       (json[i].nota >= json[9].nota)
     )
     {
       alert("La nota mayor es : "+json[i].nota+" y el nombre del alumno es : "+json[i].nombre);
      //  document.getElementById("c").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }
    }
}

function notaMayor(){
  mayor(estudiantes);
}

function menor(json){
  for (var i = 0; i < json.length; i++) {
     if(
       (json[i].nota <= json[0].nota)&&
       (json[i].nota <= json[1].nota)&&
       (json[i].nota <= json[2].nota)&&
       (json[i].nota <= json[3].nota)&&
       (json[i].nota <= json[4].nota)&&
       (json[i].nota <= json[5].nota)&&
       (json[i].nota <= json[6].nota)&&
       (json[i].nota <= json[7].nota)&&
       (json[i].nota <= json[8].nota)&&
       (json[i].nota <= json[9].nota)
     )
     {
       alert("La nota menor es : "+json[i].nota+" y el nombre del alumno es : "+json[i].nombre);
      // document.getElementById("d").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }

    }
}

function notaMenor(){
  menor(estudiantes);
}


function obtenerPromedioAsistencia(json){
  var p = 0;
  var q = 0;
  var s = 0;
  var i;
  for (var i = 0; i < json.length; i++) {
    p = json[i].asistencia;
    j = i+1;
    q = (q+p);
    s = Math.round(q/j);
  }
  alert("El promedio de asistencia es : "+s);
}

function promedioAsistencia(){
  obtenerPromedioAsistencia(estudiantes);
}

function obtenerGenero(json){
  var f = 0;
  var m = 0;
  for (var i = 0; i < json.length; i++) {
    if (json[i].genero=="F" || json[i].genero=="f") {
       f = f+1;
    }
    else{
       m = m+1;
    }
  }
  alert("La cantidad de mujeres es : "+f+" y la cantidad de hombres es : "+m);
}

function mostrarGenero(){
  obtenerGenero(estudiantes);
}
