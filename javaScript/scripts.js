// Syntaxis de JavaScript

const URL_API = "APi que no sera cambiada"
let contador = 0;  // Puede cambiar la informacion dentro de la variable

// Detectar el tipo de valor de una variable

let = 10; 

if (typeof dato === "string") { // me indica el tipo de dato de una variable
    dato = Number(dato) // Si es texto, lo convierto a número 
}

// Estructura de Control

if (usuariosLogueado) {
    mostrarDashboard();
}


// Template String 

const nombre = "apolinar"
console.log(`El nombre de la persona es ${nombre}`)

// Callback

function pedirDomicilio(entregar) {
    console.log("pizza en camino")
    entregar();
}

pedirPizza(() => console.log("Entrega de la pizza"))

// Array multimensional

let mapa = [
    [0,1],
    [1,0]
];

// For in - for of

let juegos = ["RE4", "Dark Souls"]; 
for (let juego of juegos) console.log(juego);

