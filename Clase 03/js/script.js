// Bucle FOR
// for(declaracion/asignacion; condicion de parada o limite ; decremento o incremento)
//  Matrices i j
// i++ i=i+1
// for(let i=1;i <=3;i++){
// alert("Usted es el jefe de los minisuper? Esta es la repeticón "+i+ " del bucle")
// }
// alert("Gracias, vuelvan prontos")

// Una cuenta regresiva
// i-- i=i-1
// for(let i=10; i>0; i--){
// alert("Faltan "+i+ " segundos para el 2025")
// }
// alert("Feliz 2025!")

// Podemos usar el valor de la variable i para hacer operaciones en cada iteracion
for (let i = 1; i <= 10; i++) {
  // console.log("2*" + i + " es igual a " + 2 * i);
}

// Le pedimos un dato al usuario en cada iteracion
// for(let i=1; i<3;i++){
// nombre= prompt("Ingresa tu nombre")
// alert("Buen dia, "+ nombre)
// }

// setencias Break
let savedPass = "pass123";
// 0 1 2 (3 iteraciones)
// for(let i=0; i<3; i++){
//     let password = prompt("Ingresa tu contraseña")
//     let user = prompt("Ingresa tu usuario")
//     if(savedPass=== password){
//     alert("Bienvenido!")
//     break
//     }
// }

// Setencias continue
// 0 1 2 3 4 5 6 7 8 9(10 iteraciones) i=0 ; i<10
// 1 2 3 4 5 6 7 8 9 10 (10 iteraciones) i=1 ; i<=10
// for (let i = 0; i < 10; i++) {
//   if (i == 4) {
//     alert("sapo muerto");
//     continue
//    }
//   alert(i);
// }
// //Bucle While
// let repetir = true;
// while (repetir) {
//   console.log("Soy un bucle while");
//   repetir = false;
// }

// // While con una variable numerica
// let contador = 0;
// // while(condicion)
// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }

// let kilometraje=1000
// while(kilometraje > 0){
// console.log("P.Sherman, calle wallabee 42 sidney")
// kilometraje--
// }
// console.log("Nemo!")

// let edad = parseInt(prompt("Ingresa tu edad"))
// while(edad < 13){
// console.log("No podes pasar. Tenes que tener 13 años o mas")
// edad = parseInt(prompt("Ingresa tu edad"))
// }
// alert("Bienvenido!")

// let pedido= prompt("Elegi tu color")
// let colorSecreto="rojo"
// // IMPORTANTE el ciclo se va iterar mientras la condicion sea verdadera
// while(colorSecreto!=pedido){
// alert("No tenemos ese color")
// pedido= prompt("Elegi tu color")
// }
// alert("Nos vamos a dormir tranquilos porque ese es el color secreto")

// // Do- while
// let condicion = false;
// do {
//   console.log("soy un do while");
// } while (condicion);

// // while
// while (condicion) {
//   console.log("soy un while");
// }

// let passGuardad = "tabla";
// let continuar = true;

// do {
//   let passUser = prompt("Ingresa tu contraseña");
//   if (passGuardad == passUser) {
//     alert("Bienvenido!");
//     continuar = false;
//   }
// } while (continuar);

// Switch (condicional)

let opcion = prompt("elegi una opcion: \n 1- Te \n 2- Cafe \n 3- Chocolate");
switch (opcion) {
  case "1":
    console.log("elegiste te");
    break;
  case "2":
    console.log("Elegiste Cafe");
    break;
  case "3":
    console.log("elegiste chocolate");
    break;
  default:
    console.log("Elegiste una opcion no valida")
    break
}
