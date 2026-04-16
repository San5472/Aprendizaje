// Hoisting clasico con var
console.log(nombre)
var nombre = "kanye west"

// Pasa lo mismo que con const, no se va a poder al leerse el codigo de arriba a abajo. la PDZ no entrar primero a la variable
// console.log(edad)
// let edad = 20

// Funciones Hoisting 

saludar() // acá no hay problemas, si se eleva de una manera normal
function saludar() {
    console.log("hola pepe")
}

// Funcions expressions
hablar();
var hablar = function() {
    console.log('habla pepe')
}