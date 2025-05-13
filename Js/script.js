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