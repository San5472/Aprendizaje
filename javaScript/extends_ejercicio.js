// ejercicio de practica del uso del extends.

class Padre{ // clase padre. 
    constructor(nombre){ // creacion de la clase padre, tambien para dar a conocer de que es una clase nombrada.
        this.nombre = nombre; // atributo principal.
    }

    saludo(){ // metodo principal que sera despues utilizado por el hijo. 
        console.log(`hola mi nombre es ${this.nombre}`); // saludo del padre.
    }
}


class Hijo extends Padre{
    constructor(nombre, edad){
        super(nombre); // el super llama la funcion principal del padre y lo que hace es que la modifica a su modo.
        this.edad = edad; // atributo propio del hijo.
    }
    saludo(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años `); // salida de la informacion.
    }
}

const hijo = new Hijo("santiago", 18); // definicion de los atributos del objeto.
hijo.saludo(); // salida del mensaje.