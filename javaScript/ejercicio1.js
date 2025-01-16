// ejercicio de prueba

const readline = require('readline');

console.log('bienvenido');

const ingresoContraseña = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});


ingresoContraseña.question('ingrese su contraseña:', (Contraseña) =>{
    if (Contraseña == "lapiz"){
        console.log(true)
    } else if (Contraseña == "hola") {
        console.log(true)
    } else {
        console.log(false)
    }
    ingresoContraseña.close();
});