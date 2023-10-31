/*
 * Al igual que en JavaScript tenemos let, var y const.
 * A diferencia de JavaScript se puede definir el tipo de dato que va a recibir la variable.
 * -let a:string
 * -let a:number
 * -let a:boolean
 * -let a:any
 */
// Variables
var hola = "Hola mundo!";
var a = 6;
var verdader = true;
// Any es el tipo de dato en donde se puede meter cualquier dato
var cualquierValor = "Variable que recibe cualquier dato";
// Constantes
var PI = 3.1416;
console.log(hola, a, PI);
// Arrays
var dias = ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"];
// DOM
// querySelector nos permite seleccionar un elemento por su etiqueta
var $dias = document.querySelector("#dias");
if ($dias !== null) {
    dias.forEach(function (dia) {
        var $li = document.createElement("li");
        $li.textContent = dia;
        $dias.appendChild($li);
        // ! en TypeScript se llama operador de aserción de no nulidad. Se utiliza para asegurar al compilador que un 
        // valor no será nulo o indefinido en un contexto donde normalmente podría serlo.
        // $dias no será nulo en ese punto del código, a pesar de que su tipo es HTMLElement | null
    });
}
