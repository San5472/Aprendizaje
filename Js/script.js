console.log("Esto es un mensaje de JS")

let edad = 19 // Variable de forma global
let nombre = "Santiago"

const mensaje = `El nombre de la persona es: ${nombre} y tiene una edad de ${edad}  ` 
console.log(mensaje);

if (edad>= 19){
    console.log("Eres mayor de edad")
} else if (edad >= 13){
    console.log("Eres adolecente")
} else {
    console.log("Eres niñoo")
}



let animal = "Vaca"

if (animal.toLocaleLowerCase() === "vaca"){
    console.log("Muu")

} else if (animal.toLocaleLowerCase() === "perro"){
    console.log("woof Wof")
} else {
    console.log("Imitas los sonidos")
}

// arrow function

function saludar (nombre){
    return "hola " + nombre
}

console.log(saludar("david"))


// funcion anonima



const saludo = function (nombre) {
    return 'Hola ' + nombre; 
}

console.log(saludo("zambrano"))

// funciones flechas

const lastname = apellido => 'saludos ' + apellido;

console.log(lastname("izaquita"));

const suma = (a,b) => a + b;  // se tendria que definir las variables

const resultado = suma (1,6);

console.log(`Este es el resultado: ${resultado}`);


// el destructuring me sirve para poder extraer datos de una clase o de arrays

const Casa = {
    material1: "Cemento",
    material2: "Bloque",
    material3: "Arena"
};

const { material1, material2, material3 } = Casa;

console.log(material1, material2,material3);

// arrow con un array

const colores = ["rojo", "verde", "azul"];
const [a,b,c] = colores;

console.log(a,b,c);

const Carro = {
    placa: "234",
    color: "negro",
    modelo: "Fortuner"
}

const {placa, color,modelo} = Carro;

console.log(placa,color,modelo);