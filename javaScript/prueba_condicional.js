// ejemplo de un uso de los condicionales

const readline = require('readline'); // como una señalizacion que se va a ingresar datos y se pueda leer en la terminal.

const ingreso = readline.createInterface({ // esto es lo que permita que se haga la entrada de los datos.
    input: process.stdin,
    output: process.stdout
});

ingreso.question("ingrese su edad:", (edad) => {
    const edadnumerica = parseInt(edad,10) // esto lo que hace que el numero lo lee, como un numero, no como una cadena.

    if (edadnumerica>= 18){// se aplica el condicional.
        console.log("hey cole ponte a trabajar");
    } else {
        console.log("hey ponte a estudiar"); 
    }
    ingreso.close(); // es importante poner porque o si no, el programa va a quedar esperando
});

// importante que se pueda poner el node.js (el nombre del archivo).
// tener cuidado con las minusculas, es mejor escribir todo con las minisculas