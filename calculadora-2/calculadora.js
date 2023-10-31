"use strict";
class Calculadora {
    suma(a, b) {
        return a + b;
    }
    resta(a, b) {
        return a - b;
    }
    multiplicacion(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            return null;
        }
        return a / b;
    }
}
window.onload = () => {
    let calculadora = new Calculadora();
    let botonSuma = document.getElementById('suma');
    if (botonSuma) {
        botonSuma.addEventListener('click', () => {
            const num1 = Number(document.getElementById('num1').value);
            const num2 = Number(document.getElementById('num2').value);
            let resultado = calculadora.division(num1, num2);
            let elementoResultado = document.getElementById('resultado');
            if (elementoResultado) {
                elementoResultado.innerText = 'Resultado: ' + resultado;
            }
        });
    }
    // Haz lo mismo para los otros botones
};
