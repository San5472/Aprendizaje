// Toma de peso

const readline = require('readline'); // poder entrada por terminal

const interfaz = readline.createInterface({ // uso del input y output
    input: process.stdin,
    output: process.stdout
}); 

let peso; // variable en donde  se va a almacenar la informacion
let altura; // variable en donde se guarda la informacion


interfaz.question("Bienvenido, ingrese su peso:", (peso) =>{ // uso del condicional
    if (isNaN(peso)){
    } else {
        console.log("Ingrese un peso valido");
    }

    interfaz.question("ingrese su altura:", (altura) =>{ // uso del condicional para preguntar sobre la altura
        if (isNaN(altura)){
            console.log("ingrese una altura en metros");
        }

        const resultado = peso / (altura*altura);

        if (resultado <= 18.5){ // condicional que indica cual es el peso de las personas, dependiendo de sus datos
        console.log("Estas bajo de peso, su resultado es:",resultado);
        } else if (resultado <= 24.9) {
        console.log("Esta es un peso normal su resultado es:",resultado ); 
        } else if (resultado <= 29.9) {
        console.log("Estas en sobre peso su resultado es:",resultado); 
        } else if  (resultado => 30) {
        console.log("Estas obeso su resultado es:",resultado);
        }

        interfaz.close(); // cierre del programa 

    });

});      


