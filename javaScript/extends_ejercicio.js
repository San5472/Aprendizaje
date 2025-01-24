// ejercicio de practica del uso del extends.

class Padre{
    constructor(nombre){ // creacion de la clase padre, tambien para dar a conocer de que es una clase nombrada.
        this.nombre = nombre; // atributo principal.
    }

    saludo(){ // metodo principal que sera despues utilizado por el hijo. 
        console.log(`hola mi nombre es ${this.nombre}`);
    }
}


class Hijo extends Padre{
    constructor(nombre, edad){
        super(nombre);
        this.edad
    }
    saludo(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años `);
    }
}

const hijo = new Hijo("santiago", 18); // definicion de los atributos del objeto
hijo.saludo(); // salida del mensaje