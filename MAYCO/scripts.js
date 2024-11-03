function registrarEstado() {
    const sector = document.getElementById('sector').value;
    const estado = document.getElementById('estado').value.trim();

    if (estado) {
        updateTrackingStatus(sector, estado);
    } else {
        showAlert("Por favor, ingrese el estado del paquete.");
    }
}

function updateTrackingStatus(sector, estado) {
    const message = `Estado registrado para ${sector}: ${estado}`;
    document.getElementById('tracking-status').innerText = message;
}

function toggleCodigo() {
    const estadoPunto = document.getElementById('estado-punto').value;
    const codigoSection = document.getElementById('codigo-section');
    
    codigoSection.style.display = (estadoPunto === "codigo") ? "block" : "none";
}

function establecerEstadoPunto() {
    const punto = document.getElementById('punto').value;
    const estadoPunto = document.getElementById('estado-punto').value;
    const codigo = document.getElementById('codigo').value.trim();
    let message = `Punto de venta ${punto}: `;

    if (estadoPunto === "ubicacion") {
        message += "Ubicación actual registrada.";
    } else if (estadoPunto === "codigo") {
        if (codigo) {
            message += `Código de verificación establecido: ${codigo}`;
        } else {
            showAlert("Por favor, ingrese un código de verificación.");
            return;
        }
    }
    updateLocationStatus(message);
}

function updateLocationStatus(message) {
    document.getElementById('location-status').innerText = message;
}

function showAlert(message) {
    alert(message);
}
