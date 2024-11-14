// Enfocar el campo del número base al cargar
function focusBaseNumber() {
    document.getElementById("baseNumber").focus();
}

// Función para formatear números con puntos cada tres dígitos
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Calcular el porcentaje y redondear a enteros
function calculatePercentage() {
    const baseNumber = parseFloat(document.getElementById("baseNumber").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(baseNumber) || isNaN(percentage)) {
        showMessage("Por favor ingresa valores válidos", "error");
        return;
    }

    const result = Math.round((baseNumber * percentage) / 100);
    document.getElementById("result").value = formatNumber(result);
    updateHistory(`${formatNumber(baseNumber)} x ${percentage}% = ${formatNumber(result)}`);
    showMessage("Cálculo realizado con éxito", "success");
}

// Invertir porcentaje (calcula cuánto representa un número sobre otro)
function inversePercentage() {
    const baseNumber = parseFloat(document.getElementById("baseNumber").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(baseNumber) || isNaN(percentage) || percentage === 0) {
        showMessage("Valores no válidos para inversión", "error");
        return;
    }

    const result = Math.round((baseNumber / percentage) * 100);
    document.getElementById("result").value = formatNumber(result);
    updateHistory(`${formatNumber(baseNumber)} es el ${percentage}% de ${formatNumber(result)}`);
    showMessage("Inversión de porcentaje calculada", "success");
}

// Limpiar todos los campos
function clearFields() {
    document.getElementById("baseNumber").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("result").value = "";
    showMessage("Campos limpiados", "success");
}

// Cambiar entre modo oscuro y claro
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Actualizar historial de cálculos
function updateHistory(entry) {
    const historyList = document.getElementById("history");
    const listItem = document.createElement("li");
    listItem.innerText = entry;
    historyList.appendChild(listItem);
}

// Mostrar mensaje de estado (éxito o error)
function showMessage(message, type) {
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.innerText = message;
    statusMessage.style.color = type === "error" ? "red" : "green";
    setTimeout(() => {
        statusMessage.innerText = "";
    }, 3000);
}
