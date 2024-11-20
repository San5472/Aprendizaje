
// esto es una alerta
alert("joa que monda");

// uso de las variables
let nombre = "santiago";
let apellido = "zambrano";

// imprimir por consola
console.log(nombre);

// uso de las constantes

const altura = 180;
console.log(altura);

// en el uso de las constantes son cajas por asi decirlo que no se le puede cambiar el nombre, ya es un valor definido 

// concatenacion

let concatenacion = nombre + apellido;

// seleccionar elementos de la pagina

let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>caja de datos</h1>
    <h2>el nombre  es ${nombre} ${apellido}</h2>
`;    

// condicionales

if (altura >= 200){
    datos.innerHTML += "<h1>eres una persona alta</h1>";
} else {
    datos.innerHTML += "<h1>eres una persona baja</h1>";
}

// bucles
for (let year = 2000; year <= 2024; year++){
    datos.innerHTML += `<h1>este es el año: ${year}</h1>`
}

// arrays
let nombres = ["polo","uso carruso","juancho polo","juancho la cotopla","el propio bello"];

let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = nombres [2];