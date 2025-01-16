// ejercicio de prueba

const readline = require('readline'); // ingreso por terminal

console.log('bienvenido');

const ingresoContraseña = readline.createInterface({ // entrada y salida, permite la entrada y salida desde la terminal 
    input:process.stdin, // entrada
    output: process.stdout // salida
});


ingresoContraseña.question('ingrese su contraseña:', (Contraseña) =>{ // condicional
    if (Contraseña == "lapiz"){ // primer valor si es correcto me va a retornar true 
        console.log(true)
    } else if (Contraseña == "hola") { // lo mismo si es correcto devuelve true
        console.log(true)
    } else {
        console.log(false) // en caso que sea incorrecto me debe de devolver false
    }
    ingresoContraseña.close(); // cierre de la condicion 
});