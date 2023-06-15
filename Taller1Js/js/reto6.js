// Variables globales
var registroForm = document.getElementById("registro-form");
var noDocumentoInput = document.getElementById("no-documento");
var fechaNacimientoInput = document.getElementById("fecha-nacimiento");
var correoInput = document.getElementById("correo");
var passwordInput = document.getElementById("password");
var comprobarPasswordInput = document.getElementById("comprobar-password");
var aceptarTerminosCheckbox = document.getElementById("aceptar-terminos");
var verTerminosBtn = document.getElementById("ver-terminos-btn");
var modal = document.getElementById("myModal");
var cerrarModalBtn = document.getElementById("cerrar-modal");

// Event Listeners
registroForm.addEventListener("submit", validarFormulario);
verTerminosBtn.addEventListener("click", abrirModal);
cerrarModalBtn.addEventListener("click", cerrarModal);

// Función para validar el formulario
function validarFormulario(event) {
  event.preventDefault();
  
  // Reiniciar mensajes de error
  reiniciarErrores();

  // Validar campos obligatorios
  var camposObligatorios = document.querySelectorAll("input:required");
  for (var i = 0; i < camposObligatorios.length; i++) {
    var campo = camposObligatorios[i];
    if (!campo.value) {
      mostrarError(campo, "Este campo es obligatorio.");
    }
  }

  // Validar longitud del número de documento
  if (noDocumentoInput.value.length < 5) {
    mostrarError(noDocumentoInput, "Ingrese un número de documento válido (mínimo 5 caracteres).");
  }

  // Validar caracteres alfanuméricos para Nombre y Apellido
  if (!/^[A-Za-z0-9\s]+$/.test(nombreInput.value)) {
    mostrarError(nombreInput, "Ingrese un nombre válido (solo caracteres alfanuméricos).");
  }
  if (!/^[A-Za-z0-9\s]+$/.test(apellidoInput.value)) {
    mostrarError(apellidoInput, "Ingrese un apellido válido (solo caracteres alfanuméricos).");
  }

  // Validar fecha de nacimiento mayor a 18 años
  var fechaNacimiento = new Date(fechaNacimientoInput.value);
  var fechaMinima = new Date();
  fechaMinima.setFullYear(fechaMinima.getFullYear() - 18);
  if (fechaNacimiento > fechaMinima) {
    mostrarError(fechaNacimientoInput, "Debe ser mayor de 18 años.");
  }

  // Validar dominio de correo electrónico
  if (!/^[a-zA-Z0-9._%+-]+@misena.edu.co$/.test(correoInput.value)) {
    mostrarError(correoInput, "Ingrese un correo electrónico válido (@misena.edu.co).");
  }

  // Validar contraseña
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(passwordInput.value)) {
    mostrarError(passwordInput, "Ingrese una contraseña válida (mínimo 10 caracteres, una mayúscula, una minúscula, un número, un carácter especial).");
  }

  // Validar coincidencia de contraseñas
  if (passwordInput.value !== comprobarPasswordInput.value) {
    mostrarError(comprobarPasswordInput, "Las contraseñas no coinciden.");
  }

  // Validar aceptación de términos de uso
  if (!aceptarTerminosCheckbox.checked) {
    mostrarError(aceptarTerminosCheckbox, "Debe aceptar los Términos de uso.");
  }
}

// Función para reiniciar los mensajes de error
function reiniciarErrores() {
  var errores = document.querySelectorAll(".error-message");
  for (var i = 0; i < errores.length; i++) {
    errores[i].style.display = "none";
  }
}

// Función para mostrar un mensaje de error
function mostrarError(campo, mensaje) {
  var errorSpan = campo.parentNode.querySelector(".error-message");
  errorSpan.textContent = mensaje;
  errorSpan.style.display = "block";
}

// Función para abrir la ventana modal
function abrirModal() {
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
  modal.style.display = "none";
}
