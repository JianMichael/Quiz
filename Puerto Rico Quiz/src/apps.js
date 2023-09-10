//This is the mains Func for adding points for each correct answers.
function calcularPuntos() {
    const formulario = document.getElementById("quizForm");
    const checkboxes = formulario.querySelectorAll("input[type='checkbox']");
    
    let points = 0;
    let totalPreguntas = 11;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const value = checkbox.getAttribute("value");

            if (value === "correct") {
                points++;
            }
        }
    });
    
    const porcentaje = (points / totalPreguntas) * 100;
    const porcentajeEntero = Math.round(porcentaje);
    document.getElementById("points").textContent = points;
    document.getElementById("porcentaje").textContent = porcentajeEntero + "%";
}

function reiniciarPuntos() {
    const formulario = document.getElementById("quizForm");
    const checkboxes = formulario.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Restablece los puntos y el porcentaje a cero
    document.getElementById("points").textContent = "0";
    document.getElementById("porcentaje").textContent = "0%";
}

// Llamar a la función para reiniciar puntos cuando sea necesario
document.getElementById("botonReset").addEventListener("click", reiniciarPuntos);

//This is the main fuction for the points to all correct answers.