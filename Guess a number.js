function juegoAdivinanza() {
    alert("¡Bienvenido al juego de adivinar el número!");

    let dificultad = prompt("Selecciona una dificultad:\n1. Fácil (10 intentos)\n2. Intermedio (5 intentos)\n3. Difícil (3 intentos)");
    let intentosMax;

    switch (dificultad) {
        case "1":
            intentosMax = 10;
            break;
        case "2":
            intentosMax = 5;
            break;
        case "3":
            intentosMax = 3;
            break;
        default:
            alert("Opción no válida. Configurando dificultad en Fácil (10 intentos)");
            intentosMax = 10;
    }

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let acertado = false;

    while (intentos < intentosMax && !acertado) {
        const intento = parseInt(prompt(`Adivina el número entre 1 y 100. Intento ${intentos + 1} de ${intentosMax}:`));

        if (isNaN(intento) || intento < 1 || intento > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            continue;
        }

        intentos++;
        
        if (intento < numeroSecreto) {
            alert("Demasiado bajo.");
        } else if (intento > numeroSecreto) {
            alert("Demasiado alto.");
        } else {
            alert(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
            acertado = true;
        }
    }

    if (!acertado) {
        alert(`Lo siento, te quedaste sin intentos. El número correcto era ${numeroSecreto}.`);
    }
}

console.log(juegoAdivinanza());
