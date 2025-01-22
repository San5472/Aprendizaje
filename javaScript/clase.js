// clase nombrada 

class Persona{ // creacion de la clase
    constructor(genero, color){
        this.genero = genero ; // esto es una atributo de la clase 
        this.color = color; // tambien es un atributo 
    }

    // Metodo
    saludar() {
        console.log(`Hola, mi nombre es Santiago mi genero es ${this.genero} y mi color de piel es ${this.color}`);
        // Importante colocar comillas invertidas para que la interpolaracion se pueda dar
    }


} // para cuando este sea creado va a tener estas caracteristicas de fabrica


const Santiago = new Persona("Masculino" , "Moreno"); // instancia de la clase (crear el objeto)
Santiago.saludar();

/* las clases anonimas son aquellas en las que se define primero la variable y despues la clase
    un ejemplo de estas podria ser

    const persona = class {
        constructor(genero, color){
            this.genero = genero;
            this.color = color;
        }
            saludar(){
                console.log(`Hola, mi nombre es Santiago mi genero es ${this.genero} y mi color de piel es ${this.color}`);
            }
    }
    const santiago = new persona("Masculino" , "Moreno");
    santiago.saludar(); 



     basicamente es igual pero a esta se la va a agregar una variable y su identificador de la varible sera "class"

 */

