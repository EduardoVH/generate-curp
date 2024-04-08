document.getElementById('curpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de manera tradicional

    var form = event.target;
    var formData = new FormData(form);

    // Envía los datos del formulario al servidor
    fetch('/generar_curp', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Muestra la CURP generada en el div correspondiente
            document.getElementById('curpResult').innerText = "CURP generada: " + data.curp;
            document.getElementById('curpResult').style.display = 'block'; // Muestra el div
            document.getElementById('limpiarBtn').style.display = 'block'; // Muestra el botón de limpiar
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Maneja el evento de clic en el botón de limpiar formulario
document.getElementById('limpiarBtn').addEventListener('click', function() {
    document.getElementById('curpForm').reset(); // Limpia el formulario
    document.getElementById('curpResult').style.display = 'none'; // Oculta el div de la CURP
    document.getElementById('limpiarBtn').style.display = 'none'; // Oculta el botón de limpiar
});
