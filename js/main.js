// Importa funciones y constantes desde otros archivos
import esUnCuil from "./validar-cuil.js"; // Función para validar CUIL
import esMayorDeEdad from "./validar-edad.js"; // Función para validar edad
import { tiposError, mensajes } from "./customErrors.js"; // Tipos de errores y mensajes personalizados

// Selecciona todos los campos requeridos del formulario
const campoDeFormulario = document.querySelectorAll("[required]");

// Selecciona el formulario
const formulario = document.querySelector("[data-formulario]");

// Agrega un evento al formulario para cuando se envía
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Crea un objeto con las respuestas del formulario
    const listaRespuestas = {
        nombre: e.target.elements["nombre"].value,
        email: e.target.elements["email"].value,
        identificacion: e.target.elements["identificacion"].value,
        cuil: e.target.elements["cuil"].value,
        fecha_nacimiento: e.target.elements["fecha_nacimiento"].value,
    };

    // Guarda las respuestas en localStorage
    localStorage.setItem("registro", JSON.stringify(listaRespuestas));

    // Redirige al usuario a otra página
    window.location.href = "./abrir-cuenta-form-2.html";
});

// Agrega eventos a cada campo requerido
campoDeFormulario.forEach((campo) => {
    // Evento al perder el foco
    campo.addEventListener("blur", () => verificarCampo(campo));
    // Evento al ser inválido, previene el comportamiento por defecto
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

// Función para verificar la validez del campo
function verificarCampo(campo) {
    let mensaje = ""; // Inicializa el mensaje de error vacío
    campo.setCustomValidity(""); // Reinicia el mensaje de error personalizado

    // Valida el CUIL si el campo es "cuil" y tiene al menos 11 caracteres
    if (campo.name == "cuil" && campo.value.length >= 11) {
        esUnCuil(campo);
    }

    // Valida la edad si el campo es "fecha_nacimiento" y no está vacío
    if (campo.name == "fecha_nacimiento" && campo.value != "") {
        esMayorDeEdad(campo);
    }

    // Recorre los tipos de error definidos
    tiposError.forEach((error) => {
        // Si el campo tiene un error de este tipo
        if (campo.validity[error]) {
            // Obtiene el mensaje correspondiente
            mensaje = mensajes[campo.name][error];
            console.log(mensaje); // Muestra el mensaje en la consola
        }
    });

    // Selecciona el elemento donde se mostrará el mensaje de error
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");

    // Verifica si el campo es válido
    const validarInputCheck = campo.checkValidity();

    // Muestra el mensaje de error si el campo no es válido
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        // Limpia el mensaje de error si el campo es válido
        mensajeError.textContent = "";
    }
}
