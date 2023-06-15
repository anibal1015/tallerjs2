// Instructores y actividades
var instructores = [
    "Jennifer Fajardo",
    "Margarita Guzman",
    "Erik Granados",
    "Cristian Buitrago",
    "Sandra Rueda",
    "Julio Buitrago",
    "Manuel Garavito"
  ];
  
  var actividades = [
    "JavaScript",
    "Prototipado",
    "Java Avanzado",
    "Diseño de Proyecto",
    "SQL",
    "Derechos del Trabajo",
    "Python"
  ];
  
  // Función para comprobar la respuesta
  function comprobarRespuesta() {
    var nombreSeleccionado = document.getElementById("nombres").value;
    var apellidoSeleccionado = document.getElementById("apellidos").value;
    var actividadSeleccionada = document.getElementById("actividades").value;
  
    var indice = instructores.indexOf(nombreSeleccionado + " " + apellidoSeleccionado);
    if (indice !== -1 && actividades[indice] === actividadSeleccionada) {
      alert("La respuesta es correcta");
    } else {
      alert("La respuesta es incorrecta");
    }
  }
  