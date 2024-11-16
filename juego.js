let numeroSecreto;
let intentos;
let tiempoInicio;
let intervaloTiempo;
let nivel;

function iniciarJuego() {
    // Obtener el nivel seleccionado
    nivel = document.getElementById("nivel").value;

    // Establecer el rango según el nivel
    switch (nivel) {
        case "easy":
            numeroSecreto = Math.floor(Math.random() * 50) + 1;
            break;
        case "medium":
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            break;
        case "hard":
            numeroSecreto = Math.floor(Math.random() * 200) + 1;
            break;
    }

    // Reiniciar variables de juego
    intentos = 0;
    document.getElementById("intentos").textContent = `Intentos: ${intentos}`;
    document.getElementById("mensaje").textContent = "Intenta adivinar el número generado aleatoriamente.";
    document.getElementById("reiniciar").style.display = "none";  // Ocultar botón de reiniciar
    document.getElementById("entrada").disabled = false;  // Habilitar el campo de entrada

    // Iniciar el cronómetro
    tiempoInicio = Date.now();
    intervaloTiempo = setInterval(mostrarTiempo, 1000);
}

function verificarNumero() {
    const entrada = parseInt(document.getElementById("entrada").value);
    intentos++;

    if (entrada === numeroSecreto) {
        clearInterval(intervaloTiempo);  // Detener el cronómetro
        document.getElementById("mensaje").textContent = `¡Felicidades! Has adivinado el número en ${intentos} intentos y en ${Math.floor((Date.now() - tiempoInicio) / 1000)} segundos.`;
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("reiniciar").style.display = "block";  // Mostrar botón para reiniciar
        document.getElementById("entrada").disabled = true;  // Deshabilitar el campo de entrada
    } else if (entrada < numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número es mayor. Intenta nuevamente.";
        document.getElementById("mensaje").style.color = "red";
    } else {
        document.getElementById("mensaje").textContent = "El número es menor. Intenta nuevamente.";
        document.getElementById("mensaje").style.color = "red";
    }

    document.getElementById("intentos").textContent = `Intentos: ${intentos}`;
}

function mostrarTiempo() {
    const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
    document.getElementById("tiempo").textContent = `Tiempo: ${tiempoTranscurrido}s`;
}

function reiniciarJuego() {
    // Reiniciar todo el juego
    document.getElementById("entrada").value = "";
    iniciarJuego();
}

