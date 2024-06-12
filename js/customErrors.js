// Exporta un array de tipos de errores que pueden ocurrir en los campos de un formulario
export const tiposError = [
  "valueMissing",       // El campo está vacío
  "typeMissmatch",      // El valor no coincide con el tipo esperado (por ejemplo, email)
  "patternMissmatch",   // El valor no coincide con el patrón especificado
  "tooShort",           // El valor es demasiado corto
  "customError",        // Un error personalizado definido por el programador
];

// Exporta un objeto que contiene los mensajes de error específicos para cada campo del formulario
export const mensajes = {
  // Mensajes de error para el campo "nombre"
  nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
  },
  // Mensajes de error para el campo "email"
  email: {
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
  },
  // Mensajes de error para el campo "identificación"
  identificacion: {
      valueMissing: "El campo identificación no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un número de identificación válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
  },
  // Mensajes de error para el campo "cuil"
  cuil: {
      valueMissing: "El campo cuil/cuit no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
      customError: "El cuil/cuit ingresado no existe.",
      tooShort: "El campo no tiene caracteres suficientes.",
  },
  // Mensajes de error para el campo "fecha de nacimiento"
  fecha_nacimiento: {
      valueMissing: "El campo fecha nacimiento no puede estar vacío.",
      customError: "Debes ser mayor de 18 años para registrarte.",
  },
  // Mensajes de error para el campo "términos y condiciones"
  terminos: {
      valueMissing: "Debes aceptar los términos antes de continuar.",
  },
};
