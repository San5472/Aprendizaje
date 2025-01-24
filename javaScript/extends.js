// uso del extends

class Animal{
    constructor(nombre){  // se agrega un constructor que creara las cosas con una forma ya definida desde la creacion
        this.nombre = nombre; 
    }

    sonido(){
        console.log(this.nombre + "Hacer un sonido"); // implementacion de la caracteristica que tendra
    }

}

class Perro extends Animal{ // utilizacion de la clase principal, usando su metodo
    sonido(){
        console.log(this.nombre + "ladrar.");
    }
}