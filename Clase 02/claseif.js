/* let condición = "1"

if (1 === condición) {
    console.log("esto es verdadero");
} else {
    console.log("esto es falso");
}

// operador == comparacion debil  =>>> indice es igual a
// compara valores sin importar el tipo
// JS traduce moomentaneamente un tipo para compararlo con el otro, cen caso que sean distintos.


// ooperador comparacion estricto  ===  comparacion estricta =>> es estrictamente igual a
// compara valores y tipos a la vez

// asignacion =
// comparacion debil ==
// cmpracion estricta ===

let numeroDeAfuera = "1"

if (1 === numeroDeAfuera) {
    let suma
    let numero2 = 1
    suma = numero2 + numeroDeAfuera
} else {
    Number(numeroDeAfuera)
    let suma
    let numero2 = 1
    suma = numero2 + numeroDeAfuera
}

/// 1 + "1" = "11"
/// 1 + 1 = 2 */

/* let nombreUsuario = prompt("Ingresar nombre de usuario");
nombreUsuario = nombreUsuario.toLowerCase()

if (nombreUsuario == "joaquin") {
    alert("Bienvenido " + nombreUsuario);
}
else {
    alert("usuario no encontrado");
}


let valido = 2 === 2 // true
let invalido = 2 === "2" // false

if (valido) {

} */

// asignacion =
// comparacion debil == =>>> "10" == 10
// cmpracion estricta === >>=>> "10" === "10"
// desigualdad debil != no es igual a
// desigualdad estricta !== no estrictamente igual a
// no comparan tipos:
// menor que <
// mayor que 10 > 5
// mayor o igual que  5 >= 5
// menor o igual que <=


// operadores logicos
// operador Y  =>  10 > 5 && 5 >= 5 // true
// true && true => true
// true && false => false
// false && false => false
//operador OR => ||
// true || false => true
// 10 > 5 || 5 > 5  //  true
// operador de negacion => !

/*
if (10 > 5 || 5 > 5) {
    console.log("esto es true");
}



 */

/* let precio = Number(prompt("cual es el precio?"))

if (precio < 20) {
    console.log("El precio es menor que 20");
}
else if (precio < 50) {
    console.log("El precio es menor que 50");
}
else if (precio < 100) {
    console.log("El precio es menor que 100");
}
else {
    console.log("El precio es mayor que 100");
}
 */

/* let endulzante = prompt("con que queres endulzar tu cafe")
endulzante = endulzante.toLowerCase().trim()

if (endulzante === "azucar") {
    alert("azucaaar")
} else if (endulzante == "miel") {
    alert("a la abejas no les gusta esto")
} else {
    alert("eres un ser tan oscuro como tu cafe")
}
 */

/* let valor = true
console.log(!valor); */

// falsy = " ", "" =>>> da como resultado un false bajo ciertas condiciones

/* let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido"); // si no lo ingreso seria un "", ergo falsy
// ingreso nombre No ingreso apellido
if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
} */

/* let cobreEsteMes = confirm("cobre este mes?");
let TengoAhorros = confirm("tengo ahorros?"); // si no lo ingreso seria un "", ergo falsy
// ingreso nombre No ingreso apellido
if ((cobreEsteMes != "") || (TengoAhorros != "")) {
    alert("tengo plata este mes");
} else {
    alert("pido un prestamo");
} */

let nombreIngresado = prompt("Ingresar nombre"); //ema

if ((nombreIngresado != "") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))) {
    alert("Hola Ema");
} else {
    alert("Error: Ingresar nombre valido");
}

