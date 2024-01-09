// Tipo de dato booleano (Algebra de bool) true(1) o false(0)
let condicion= true

// if then
if(condicion){
console.log('La condicion es verdadera')
}

let numeroA=10
let numeroB=20
// < 4 menor
// > 7 mayor
if(numeroA < numeroB){
console.log('El nunero A es menor que el numero B')
}

// let savedPass= 'tabla'
// let userPass = prompt("Ingresa su contraseña")
// /// = asignacion
// // == preguntar estado
// if(savedPass==userPass){
// alert("Bienvenido/a")
// console.log("Login exitoso")
// }else{
//     alert("Esa no es, rey")
//     console.log(userPass + "incorrecta")
// }

let edadObligatoria=18 //votar obligatoriamente
let edadoptativaMenor=16 // si queres vota
let edadOptativaMayor=70 // Si queres vota
// no podes votar
// let edadVotante= prompt("ingresa tu edad")
// & Y
//20
//if(20>=18 && 20 <70)
//if(true && true) Los dos tienen que ser verdaderos para que el resultado final sea Verdadero
//if(true)

// || O
// 17
//if(17 >= 16 || 17 >=70)
//if(true || false) Alguno de los dos tienen que ser verdaderos para que el resultado final sea Verdadero
// if(true)
// if(edadVotante>= edadObligatoria && edadVotante<edadOptativaMayor){
// alert("Debes votar")
// }else if(edadVotante>= edadoptativaMenor || edadVotante >= edadOptativaMayor){
// alert ("Si tenes ganas anda a votar")
// }else{
//     alert("No podes votar")
// }

// variables booleanas
let edad= 12
let miEdad="25"
// let edadLucas = prompt("Lucas, ingresa tu edad")
//Forma explicita de alamacenar booleanos puede ser true o false
let variableBooleana= true
// guardar l resultado de una comparacion
let variableBooleanaB= (10>2)
// guardar la comparacion entre dos variables
let variableBooleanaC= (numeroA<numeroB)
// otros tipos de operadores para la comparacion
// let comparacion = (miEdad == edadLucas)


// if(miEdad==edadLucas){
//     comparacion=true
// }else{
//     comparacion=false
// }

// Operadores Logicos
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que
// = asignacion
// == comparacion de igualdad de valor
// === comparacion estricta (compara el valor y el tipo de dato)
// != distinto de
// !== distindo de (estricto)

console.log(1===1) // true
console.log('hello'==="hello")//true
console.log('1'===1)//false
console.log('1'==1)//true
console.log(0===false)//false
console.log(0==false)//true


// ATENCION: El orden de las condiciones a evaluar es very important

let numero=1

if(numero <10){
    console.log("El numero es menor a 10")
}else if(numero < 5){
    console.log("El numero es menor a 5")
}else{
    console.log("El numero es mayor a 10")
}

// Evaluo una variable booleana directamente
// ! operador de negacion
let booleana= false
if(booleana){
    console.log("La variable es false")
}else{
    console.log("La variable es true")
}

// ENTRADAS CON PROMPT e IMPRESIONES CON ALERT O CONSOLE

// let nombreDeUsuario= prompt("ingresa tu nombre")
// let apellidoUsuario= prompt("ingresa tu apellido")

// // if(""!="" || "Velasquez" !="")
// // if(false || true)
// // if(true)
// if(nombreDeUsuario!="" || apellidoUsuario!=""){
// alert("Bienvenido/a "+nombreDeUsuario+ " "+ apellidoUsuario)
// }else{
//     alert("Datos incompletos")
// }

// // if(("soledad"!="")&&("soledad"=="Matias" || "soledad"=="matias"))
// // if(true && (false || false))
// // if(true && false)
// // if(false)
// if((nombreDeUsuario!="")&&(nombreDeUsuario=="Matias" || nombreDeUsuario=="matias")){
//     alert("Bienvenido profesor "+ nombreDeUsuario)
// }else {
//     alert("No sos el profesor Matias")
// }

let edadConductor= parseInt(prompt("Ingrese su edad"))
if(edadConductor >=18){
console.log("Podes consucir sin acompañante")
}else if(edadConductor < 18 && edadConductor >= 13){ // Este condicional esta bien pero es redundante. Si el programa llego hasta aca significa que el priomer bloque fue false. No hace falta la parte de edadConductor < 18
console.log("podes conducir con un acompañante")
} else{
    console.log("No podes conducir, no solo/a ni acompañado/a")
}