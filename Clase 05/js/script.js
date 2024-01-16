let nombre = "Homero";
let edad = 39;
let peso = 69;
let calle = "Av. Siempre viva 742";

const personaje1 = {
  nombre: "Homero",
  edad: 39,
  peso: 69,
  calle: "Av. Siempre viva 742",
};

const personaje2 = {
  nombre: "Marge",
  apellido: "Bouvier",
  edad: 38,
  esSoltera: false,
  hijos: {
    primero: "Bart",
    segundo: "Lisa",
    tercero: "Maggie",
  },
};

console.log(personaje1);

// Acceder a propiedades (atributos, caracteristicas) de los objetos, con dos notaciones: punto y corchotes
// alert("El peso del personajes es "+ personaje1.peso)
// alert("El nombre del personaje es "+ personaje1["nombre"]+" y su peso es "+personaje1["peso"]+" y su hijo es "+ personaje2["hijos"]["primero"])

// let valorBuscado="esSoltera"
// alert("Marge es soltera?: "+ personaje2[valorBuscado])

// modificar el valor de una propiedad de un objeto
console.log(personaje1.peso);
personaje1.peso = 150;
console.log(personaje1.peso);

// que pasaria si intento cambiarle el valor a una propiedad que no existe? La crea
personaje2.essoltera = true;
console.log(personaje2);

// Funcion constructora de objetos
function Personaje(nombre, apellido, edad, usaPanial) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.usaPanial = usaPanial;
  this.respira = true;

  // metodos es una acción o comportamiento del objeto
  this.hablar = function (mensaje) {
    alert("Hoy es un dia lindo: " + mensaje);
  };
}
// instanciando (creando) objetos del tipo Personaje
const personaje3 = new Personaje("Bart", "Simpson", 10, false);
const personaje4 = new Personaje("Lisa", "Simpson"); // Si faltan parametros, se completan con undefined, y se van asignando en el orden que aparecen
const personaje5 = new Personaje("Maggie", "Simpson", 2, true);

console.log(personaje3);
// usando un metodo de los objetos del tipo Peronaje
// personaje3.hablar("Ay Caramba!")
// personaje4.hablar("Todo el sistema esta mal")

// hablar("Soy Matias y tengo hambre");

// recorro todo el objeto y muestro el nombre de la propiedad y el valor
// for in
for (const propiedad in personaje5) {
  console.log("propiedad " + propiedad + ": " + personaje5[propiedad]);
}

// el usuario nos da los valores para crear un personaje
// let nombrePersonje = prompt("Ingresa el nombre del personaje")
// let apellidoPersonaje = prompt("Ingresa el apellido de tu personaje")
// let edadPersonaje = prompt("Ingrea la edad de tu personaje")

// const personajeUsuario = new Personaje(nombrePersonje,apellidoPersonaje,edadPersonaje)
// console.log(personajeUsuario)

// Los objetos JS tienen sus propios metodos y propiedades
// Aca un objeto tipo String

let cadena="Hola soy Matias"
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())
console.log(cadena.length)
