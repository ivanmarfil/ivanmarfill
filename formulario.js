// Función para cargar los datos en la tabla
function cargarDatos() {
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const provincia = document.getElementById('provincia').value.trim();
    const codigoPostal = document.getElementById('codigo-postal').value.trim();

    // Validación de los campos requeridos
    if (!nombre || !email || !telefono || !edad || !provincia || !codigoPostal) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Obtener el método de contacto seleccionado
    const metodoContacto = document.querySelector('input[name="contacto"]:checked');
    const metodoContactoValue = metodoContacto ? metodoContacto.value : 'No seleccionado';

    // Obtener los valores seleccionados para las suscripciones
    const suscripciones = [];
    document.querySelectorAll('input[name="suscripcion"]:checked').forEach(checkbox => {
        suscripciones.push(checkbox.value);
    });

    // Si no se seleccionaron suscripciones, dar un mensaje adecuado
    if (suscripciones.length === 0) {
        suscripciones.push("No se ha seleccionado ninguna suscripción");
    }

    // Mostrar los datos en la tabla
    document.getElementById('nombre-value').innerText = nombre || 'No proporcionado';
    document.getElementById('apellido-value').innerText = apellido || 'No proporcionado';
    document.getElementById('email-value').innerText = email || 'No proporcionado';
    document.getElementById('telefono-value').innerText = telefono || 'No proporcionado';
    document.getElementById('edad-value').innerText = edad || 'No proporcionado';
    document.getElementById('direccion-value').innerText = direccion || 'No proporcionado';
    document.getElementById('provincia-value').innerText = provincia || 'No proporcionado';
    document.getElementById('codigo-postal-value').innerText = codigoPostal || 'No proporcionado';
    document.getElementById('contacto-value').innerText = metodoContactoValue;
    document.getElementById('suscripcion-value').innerText = suscripciones.join(', ') || 'No seleccionadas';
}
