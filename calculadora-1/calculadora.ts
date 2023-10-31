class Calculadora {
    suma(a: number, b: number): number {
        let resultado = a + b;
        console.log(`El resultado de la suma es: ${resultado}`);
        return resultado;
    }

    resta(a: number, b: number): number {
        let resultado = a - b;
        console.log(`El resultado de la resta es: ${resultado}`);
        return resultado;
    }

    multiplicacion(a: number, b: number): number {
        let resultado = a * b;
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        return resultado;
    }

    division(a: number, b: number): number | null {
        if (b === 0) {
            console.log('Error: División por cero');
            return null;
        }
        let resultado = a / b;
        console.log(`El resultado de la división es: ${resultado}`);
        return resultado;
    }
}

let calculadora = new Calculadora();

// Prueba de la función suma
calculadora.suma(5, 3);

// Prueba de la función resta
calculadora.resta(10, 4);

// Prueba de la función multiplicación
calculadora.multiplicacion(7, 2);

// Prueba de la función división
calculadora.division(20, 5);

// Ejecute con tsc calculadora.ts -w
// La opción -w significa “watch”. Cuando se usa, el compilador TypeScript entrará en modo de observación
// El compilador observará cualquier cambio que hagas en tus archivos TypeScript y los recompilará automáticamente cada vez que guardes esos cambios