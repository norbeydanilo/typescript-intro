class Calculadora {
    suma(a: number, b: number): number {
        return a + b;
    }

    resta(a: number, b: number): number {
        return a - b;
    }

    multiplicacion(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number | null {
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
            const num1 = Number((<HTMLInputElement>document.getElementById('num1')).value);
            const num2 = Number((<HTMLInputElement>document.getElementById('num2')).value);
            let resultado = calculadora.division(num1, num2);
            let elementoResultado = document.getElementById('resultado');
            if (elementoResultado) {
                elementoResultado.innerText = 'Resultado: ' + resultado;
            }
        });
    }

    // Haz lo mismo para los otros botones
};

