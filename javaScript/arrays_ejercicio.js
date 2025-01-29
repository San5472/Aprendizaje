
const readline = require('readline'); // ingreso por la terminal

console.log("Bienvenido"); 

const ingresoDias = readline.createInterface({
    input:process.stdin, // entrada de datos
    output:process.stdout // salida de datos
    
});

console.log("Ingrese un numero del 0 al 6 para saber que dia de la semana es");

let Dias = ["Domingo","lunes","Martes","Miercoles","Jueves","viernes","Sabado"]; // lista de los dias


ingresoDias.question("ingrese el dia que quiera conocer:", (entradaUsuario) => { // condicional 
    let numero = parseInt(entradaUsuario); // convercion de a numero 
    if (numero >= 0 && numero <= 6){ // verificacion de los numeros dias
        console.log( `El dia de la semana es: ${Dias[numero]}`); // seleccion del dia
    } else {
        console.log("Numero incorrecto"); // mensaje incorrecto
    }
    ingresoDias.close(); // cierre del programa
});

/*Operador logico  && 
Este me ayuda a que si hay varias condiciones de se puede hacer por medio de rangos
Es decir, en el codigo esta el (numero >= 0 && numero <= 6) lo que va hacer es que
numero si es mayor a 0 me y si es menor a 6, en la condicion debo de el array y el numero del cual el cliente busca,
por ejemplo: ${Dias(array)[numero, numero seleccionado]} 
 */