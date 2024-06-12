// Función principal para validar si una persona es mayor de edad
export default function esMayorDeEdad(campo) {
    // Convierte el valor del campo (una fecha en formato de texto) en un objeto Date
    const fechaNacimiento = new Date(campo.value);

    // Verifica si la persona es mayor de edad
    if (!validarEdad(fechaNacimiento)) {
        // Establece un mensaje de error personalizado si no es mayor de edad
        campo.setCustomValidity("Necesitas ser mayor de edad");
    }
}

// Función para validar si la edad es mayor o igual a 18 años
function validarEdad(fecha) {
    // Obtiene la fecha actual
    const fechaActual = new Date();

    // Calcula la fecha correspondiente a 18 años después de la fecha de nacimiento
    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    // Compara la fecha actual con la fecha 18 años después de la fecha de nacimiento
    return fechaActual >= fechaMas18;
}
