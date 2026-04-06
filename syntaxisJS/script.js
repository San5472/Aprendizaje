const parrafo = document.querySelector('p') // En donde se encuentra ubicado el 0
/* const boton = document.querySelector('button')  Boton de Sumar que se encuentra en el archivo main

let contador = 0;


boton.addEventListener('click', () => {  // Evento que va a escuchar, escucha cada click que se haga
    console.log("Hubo un click")
    contador++;
    parrafo.textContent = contador;
}); */

/* const input = document.querySelector('input')

input.addEventListener('change', (evento) => {  // Cada vez que cambia algo se activa, cambia cada vez que se activa
    parrafo.textContent = evento.target.value;   // Target me permite obtener el Valor del objeto que se encuentra en el form 
}) */ 


const bloque = document.querySelector('.bloque');

bloque.addEventListener('mouseenter', () => {  //El evento mouseenter, sirve para cuando es un evento que cambia cada vez que se necesita que la propia acción del mouse haga un cambio
    bloque.style.backgroundColor = "red"; 
});

bloque.addEventListener("mouseleave", () => {
    bloque.style.backgroundColor = "blue";
})

/** 
Destructuring 
    let [greeting,,,, type] = ["Hey", "I", "am", "an", "array"]
    console.log(greeting) greeting tomara la posicion de "hey"
    console.log(type) type tomara la posición de "array"

    Object Destructuring 

    const { id, name } = {  Se usa las llaves de que es un objeto
        "id": 1, 
        "name": "juan",
        "apellido": "Zambrano",
        "age": 20
    };
    console.log(id); Imprime 1
    console.log(name); Imprme Juan

 */