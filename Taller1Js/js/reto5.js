// Función para abrir la ventana modal
function abrirModal(figura) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modal-title");
    var calcularBtn = document.getElementById("calcular-btn");
    var resultadoDiv = document.getElementById("resultado");
  
    // Configurar el título del modal y el botón Calcular
    if (figura === "circulo") {
      modalTitle.innerText = "Cálculo del Círculo";
      calcularBtn.onclick = calcularCirculo;
    } else if (figura === "triangulo") {
      modalTitle.innerText = "Cálculo del Triángulo";
      calcularBtn.onclick = calcularTriangulo;
    } else if (figura === "rectangulo") {
      modalTitle.innerText = "Cálculo del Rectángulo";
      calcularBtn.onclick = calcularRectangulo;
    } else if (figura === "cuadrado") {
      modalTitle.innerText = "Cálculo del Cuadrado";
      calcularBtn.onclick = calcularCuadrado;
    }
  
    // Limpiar el resultado anterior
    resultadoDiv.innerText = "";
  
    // Abrir el modal
    modal.style.display = "block";
  }
  
  // Función para cerrar la ventana modal
  function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Funciones de cálculo de perímetro y área
  
  function calcularCirculo() {
    var radio = parseFloat(document.getElementById("radio").value);
    var resultado = 2 * Math.PI * radio;
    mostrarResultado(resultado);
  }
  
  function calcularTriangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = (base * altura) / 2;
    mostrarResultado(resultado);
  }
  
  function calcularRectangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = base * altura;
    mostrarResultado(resultado);
  }
  
  function calcularCuadrado() {
    var lado = parseFloat(document.getElementById("lado").value);
    var resultado = lado * lado;
    mostrarResultado(resultado);
  }
  
  // Función para mostrar el resultado en el modal
  function mostrarResultado(resultado) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "El resultado es: " + resultado;
  }
  
  