function determinarTipoTriangulo() {
  let lado1 = parseFloat(document.getElementById("lado1").value);
  let lado2 = parseFloat(document.getElementById("lado2").value);
  let lado3 = parseFloat(document.getElementById("lado3").value);

  let tipoTriangulo = "";

  if (lado1 === lado2 && lado1 === lado3) {
    tipoTriangulo = "equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipoTriangulo = "isósceles";
  } else {
    tipoTriangulo = "escaleno";
  }

  alert("El triángulo es de tipo " + tipoTriangulo + ".");
}
