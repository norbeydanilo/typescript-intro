var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.suma = function (a, b) {
        var resultado = a + b;
        console.log("El resultado de la suma es: ".concat(resultado));
        return resultado;
    };
    Calculadora.prototype.resta = function (a, b) {
        var resultado = a - b;
        console.log("El resultado de la resta es: ".concat(resultado));
        return resultado;
    };
    Calculadora.prototype.multiplicacion = function (a, b) {
        var resultado = a * b;
        console.log("El resultado de la multiplicaci\u00F3n es: ".concat(resultado));
        return resultado;
    };
    Calculadora.prototype.division = function (a, b) {
        if (b === 0) {
            console.log('Error: División por cero');
            return null;
        }
        var resultado = a / b;
        console.log("El resultado de la divisi\u00F3n es: ".concat(resultado));
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
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
