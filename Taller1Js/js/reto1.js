function ejecutarOpcion(Opcion) {
  let palabra = document.getElementById("palabraInput").value;

  switch (Opcion) {
    case 1:
      let longitud = palabra.length;
      alert("Longitud de la palabra: " + longitud);
      break;
    case 2:
      let mayusculas = palabra.toUpperCase();
      alert("Palabra en mayúsculas: " + mayusculas);
      break;
    case 3:
      let minusculas = palabra.toLowerCase();
      alert("Palabra en minúsculas: " + minusculas);
      break;
    case 4:
      let primerCaracter = palabra.charAt(0);
      alert("Primer carácter de la palabra: " + primerCaracter);
      break;
    default:
      console.log("Opción inválida.");
  }
}
