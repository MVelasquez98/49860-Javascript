// Declaración de una función
function saludar() {
  alert("Buen dia");
}

// Llamado o ejecucion, o invocacion de la funcion
//saludar()

// Funcion con un parametro
function saludarConNombre(nombre) {
  alert("Buenos dias " + nombre);
}

// Funcion con varios parametros
function saludarConNombreYMomento(nombre, momento) {
  alert("Buenos/as " + momento + ", " + nombre);
}

// saludarConNombre("Ignacio")
// saludarConNombre("Mati")
// saludarConNombre("Gerardo")
// saludarConNombre("ramon")

// Les pido datos al usuario
// let nombreUsuario= prompt("Ingresa tu nombre para que te saludemos")
// let momentoDeldia = prompt("Ingresa tu momento del dia")

// saludarConNombre(nombreUsuario)
// saludarConNombreYMomento(momentoDeldia,nombreUsuario)
// en la funcion anterior, los argumentos estaban desordenados de acuerdo a los parametros

// Sentencia return expone el resultado de la ejecución de la función para que pueda ser utilizado desde afuera
function dividir(numeroA, numeroB) {
  let resultado = numeroA / numeroB;
  return resultado;
}

console.log(dividir(100, 2));
dividir(2, 100);
dividir(0, 2);
dividir(2, 0); //Infinito

// Scope
// declarando una variable con scope (ambito, contexto) global
let variableGlobal = "Soy una variable global";
console.log(variableGlobal);

function cambiar() {
  variableGlobal = "Me cambiaron desde una funcion";
  console.log(variableGlobal);
}

cambiar();
console.log(variableGlobal);

if (true) {
  variableGlobal = "Me cambiaron desde un IF";
  console.log(variableGlobal);
}
function cambiarLocal() {
  let variableGlobal = "Soy una nueva variable, solo vivo dentro de la funcion";
  console.log(variableGlobal);
}

// Este console me permite ver la diferencia de valores entre las variables (global y local) aunque se llamen igual, pero estan en diferentes scopes
console.log(variableGlobal);
cambiarLocal();

// Sintaxis simplificadas de funciones
// Funciones anonimas

// const suma = function (a, b) {
//   return a + b;
// };

// // // funcion convencional
// // function suma(a, b) {
// //   let resultado = a + b;
// //   return resultado;
// // }

// suma(5, 6);

// //funciones flecha
// const division = (a, b) => {
//   return a / b;
// };

// // tambien las podemos escribir en una sola linea
// const resta =(a,b)=> {return a-b}

// // tambien podemos prescindir de las llaves
// const multiplicacion =(a,b)=>a*b

// // tambien si recibimos un solo parametro, podemos prescindir, hasta de los parentesis
// const mensaje= x => "El mensaje es:"+x

// console.log(mensaje("Aguanten las funciones!"))
// console.log(division(70,35))

// Ejemplo de calcular el precio usando funciones flecha
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto= 1000
let descuento= 150
let nuevoPrecio= resta(suma(precioProducto,iva(precioProducto)),descuento)
console.log("El precio original del producto es $"+precioProducto+"Luego de aplicarle impuestos y descuentos, el nuevo precio es $"+nuevoPrecio)