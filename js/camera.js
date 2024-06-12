// Selecciona el botón para abrir la cámara
const botonAbrirCamara = document.querySelector("[data-video-boton]");

// Selecciona el elemento de video donde se mostrará el stream de la cámara
const video = document.querySelector("[data-video]");

// Selecciona el contenedor del campo de la cámara
const campoCamara = document.querySelector("[data-camera]");

// Selecciona el botón para tomar una foto
const botonTomarFoto = document.querySelector("[data-tomar-foto]");

// Selecciona el elemento donde se mostrará el mensaje
const mensaje = document.querySelector("[data-mensaje]");

// Selecciona el elemento canvas donde se dibujará la imagen
const canvas = document.querySelector("[data-video-canvas]");

// Selecciona el botón para enviar la foto
const botonEnviar = document.querySelector("[data-enviar]");

// Variable para almacenar la URL de la imagen
let imgUrl = "";

// Agrega un evento al botón para abrir la cámara
botonAbrirCamara.addEventListener("click", async () => {
    // Solicita acceso a la cámara del usuario
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    // Oculta el botón para abrir la cámara
    botonAbrirCamara.style.display = "none";

    // Muestra el campo de la cámara
    campoCamara.style.display = "block";

    // Asigna el stream de video al elemento de video
    video.srcObject = iniciarVideo;
});

// Agrega un evento al botón para tomar una foto
botonTomarFoto.addEventListener("click", () => {
    // Dibuja la imagen del video en el canvas
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convierte el contenido del canvas a una URL de imagen en formato JPEG
    imgUrl = canvas.toDataURL("image/jpeg");

    // Oculta el campo de la cámara
    campoCamara.style.display = "none";

    // Muestra el mensaje
    mensaje.style.display = "block";
});

// Agrega un evento al botón para enviar la foto
botonEnviar.addEventListener("click", () => {
    // Obtiene los datos del registro desde el localStorage
    const recibirDatos = localStorage.getItem("registro");

    // Convierte los datos del registro de JSON a un objeto
    const convertirDatos = JSON.parse(recibirDatos);

    // Añade la URL de la imagen al objeto de registro
    convertirDatos.img_url = imgUrl;

    // Guarda nuevamente los datos del registro en el localStorage
    localStorage.setItem("registro", JSON.stringify(convertirDatos));

    // Redirige al usuario a otra página
    window.location.href = "./abrir-cuenta-form-3.html";
});
