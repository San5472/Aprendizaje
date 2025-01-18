// Toma de peso

const readline = require('readline'); // poder entrada por terminal

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let peso;
let altura;


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

        if (resultado <= 18.5){
        console.log("Estas bajo de peso, su resultado es:", resultado);
        } else if (resultado <= 24.9) {
        console.log("Esta es un peso normal su resultado es:",); 
        } else if (resultado <= 29.9) {
        console.log("Estas en sobre peso"); 
        } else if  (resultado => 30) {
        console.log("Estas obeso compae'");
        }

        interfaz.close();

    });

});


