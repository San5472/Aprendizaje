// Uso de los arrays

// uso del length, dice cuantos elementos hay.
let frutas = ["Mango","Manzanza","Banano"];
console.log(frutas.length);

// uso del push, agrega un nuevo elemento al final.
frutas.push("Fresa");
console.log(frutas);

//uso del pop, lo que hace es que elimina el ultimo elemento.
frutas.pop();
console.log(frutas);

//uso del shift, lo que hace es que elimina el primer elemento.
frutas.shift();
console.log(frutas);

//uso del unshift, lo que hace es que añade un elemento al inicio.
frutas.unshift("papaya");
console.log(frutas);

// uso del forEach(), recorre todo el array

frutas.forEach(frutas =>console.log(frutas));