// console.log("Hola Anto, estoy aprendiendo a programar")
// console.log("Hola Fede, estoy aprendiendo a programar");
// console.log("Hola Fabio, estoy aprendiendo a programar");

// function saludarATodos() {

//     let nombre = prompt("a quien queres saludar?")


//     console.log("hola " + nombre + " estoy aprendiendo a programar");



// }


// saludarATodos()
// saludarATodos()
// saludarATodos()


// function funcionDeConcatenacion(primerTermino, segundoTermino, tercerTermino) {
//     let resultado = primerTermino + segundoTermino + tercerTermino

//     console.log(resultado);
// }
// let valorUno = prompt("primer numero a sumar")
// let valorDos = prompt("segundo valor a sumar")
// funcionDeConcatenacion(argumentoUno, argumento2, argumento3)
// /* funcionDeSuma(3, 5)
// funcionDeSuma(5, 7) */


// //Declaración de variable global para guardar el resultado de la suma
// let resultado = 0;

// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado); // es la variable global y es un 0



// let resultado = 0

// function mostrar() {

//     console.log(resultado);
// }

// mostrar()

// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
//     return resultado
// }
// let returnAlmacenado = sumar(2, 9)

// console.log(returnAlmacenado);
// var resultado = "scope";
// (function mostrar() {
//     let resultado = 0
//     console.log(resultado);
// })()

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;

//         case "-":
//             return primerNumero - segundoNumero;

//         case "*":
//             return primerNumero * segundoNumero;

//         case "/":
//             return primerNumero / segundoNumero;

//         default:
//             return 0;

//     }
// }

// console.log(calculadora(10, 5, "*"));
// console.log(calculadora(10, 5, "+"));
// console.log(calculadora(10, 5, "-"));
// console.log(calculadora(10, 5, "/"));




// function explainVar() {
//     let a = 10;
//     console.log(a);
//     if (true) {
//         let a = 20;
//         console.log(a); // output 20
//     }
//     console.log(a); // global 10
// }

// explainVar()


// nombre()

// // const suma = function (a, b) { return a + b }
// // const resta = function (a, b) { return a - b }
// // console.log(suma(15, 20))
// // console.log(resta(15, 5))
// // console.log(suma(25, 15))

// console.log(multiplicacion(5, 7));
// const suma = (a, b) => a + b
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) => a - b;

// const multiplicacion = (a, b) => {
//     return a * b
// }
// console.log(suma(15, 20))
// console.log(resta(20, 5))


// function nombre() {
//     let nombre = "eduardo"
//     console.log(nombre);
// }