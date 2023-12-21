//Sintaxis Basica de JavaScript
// Esto es un comentario Ctrl + k + C

/**
 * Este es un comentario
 * multilinea
 * Puedo escribir varias 
 * lineas
 */

//palabras reservadas
// default break case switch continue let delete do else if for function in return new 

//variables

let unNombre = "Matias" // esto es una asignacion
// camel case unNombreEjemplo unnombreejemplo UNNOMBREJEMPLO un nombre ejemplo snake case un_nombre_ejemplo

let unaFrase = " Hola Mundo este es mi mensaje"
let otroNombre= 'esta es una asignacion de comillas simples'

let miNombre=                    "matias"

 // case sensitive

 let minombre1= "pepe"
 let miNombre1= "pepe"

 // NO USAR CARACTERES ESPECIALES PARA LOS NOMBRES DE LAS VARIABLES
 // ñ í @ ! ,etc.

 let año = 1998
 let anio =1998

 let apellido = "velasquez" // se puede usar en un bloque donde fue declarada y hacia dentro
 var nombre = "matias" // se puede usar en cualquier parte del programa
 //const PI = 3.14 //No se puede cambiar su valor una vez declarado

 // PI= 4
let miVariable= "es muy tarde" // aca estoy asignando y declarando
miVariable= "tengo sueño" // aca solo estoy asignando

let miVariable2 // aca solo declaro
miVariable2 ="pero tengo deudas que pagar" // aca solo asigno


// variables tipo number
let peso = 65 //entero
let altura = 1.72 //decimal

// operaciones con variables numericas

let numero1= 4
let numero2= 6
const PI= 3.14

let suma = numero1+numero2
let resta = numero2-numero1
let producto = numero1 * PI
let modulo = numero2 % 2

// PARIDAD DE UN NUMERO UN NUMERO ES PAR SI SU RESTO ES 0 AL DIVIDIRLO POR 2

// Consola

console.log(suma)
console.log(resta)
console.log(producto)
console.log(modulo)

let palabra1= "Hola"
let palabra2 ="mundo"

let fraseSimpson ="a la grande le puse cuca"
let numero =27
let numero4= "4"

let concatenar = palabra1+palabra2
console.log(concatenar)

let concatenarConEspacio = palabra1+" "+ palabra2
console.log(concatenarConEspacio)

console.log(fraseSimpson+numero)
console.log(numero+numero4)


// Interaccion con el usuario descomentar despues ctrl +k+c 

let nombreUsuario = prompt("Ingrese el nombre del Usuario:")
let edadUsuario = parseInt(prompt ("Ingrese la edad"))
// let alturaUsuario= parseFloat(prompt("Ingrese la altura"))

// console.log(nombreUsuario)
// console.log(edadUsuario)
// console.log(alturaUsuario)
let edadFutura= edadUsuario+5

alert("Bienvenido a JavaScript "+ nombreUsuario)
alert("en 2029 vas a tener...."+edadFutura )

let numeroEjemplo = "27"
let numeroEjemploNumber = parseInt(numeroEjemplo)

console.log(numeroEjemplo)