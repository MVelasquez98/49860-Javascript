// cajero como simulador

let savedPIN = "1234";
let ingresar = false;

// Login
for (let i = 2; i >= 0; i--) {
  let userPIN = prompt("Ingresa tu pin. Tenes " + (i + 1) + " intentos");
  if (userPIN == savedPIN) {
    alert("Login exitoso");
    ingresar = true;
    break;
  } else {
    alert("Error. Te quedan " + i + " intentos");
  }
}


if (ingresar) {
  //accedemos a la info de la cuenta
  let saldo = 5000;
  let opcion = prompt(
    "Elegi una opcion: \n1-Saldo \n2-Retiro de dinero \n3-Deposito \nPresiona X para finalizar"
  );
  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
        case "1": alert("Tu saldo es $"+saldo)
            break
        case "2":retirarDinero()
            break
    }
    opcion = prompt(
        "Elegi una opcion: \n1-Saldo \n2-Retiro de dinero \n3-Deposito \nPresiona X para finalizar"
      );
  }

  function retirarDinero(){
    let retiro = parseInt(prompt("Ingresa la cantidad a retirar"))
    if(retiro <= saldo){
        saldo-=retiro 
        // saldo = saldo - retiro
        alert("Retiro exitoso. Tu nuevo saldo es $ "+saldo)
    }else{
        alert("No hay plata!")
    }
}
} 

