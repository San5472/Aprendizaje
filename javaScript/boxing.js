/*La transformacion de boxing
Es el proceso en el cual un tipo de datp primitivo se transforma
para poder usar sus atributos y metodos, ya que de por si son clases, pero solo se utiliza para lo basico*/

// de manera automatica 
let str = "hola";
console.log(str.toUpperCase()); /*Esta es de la forma normal el sistema detecta que se va a utilizar un metodo
y lo que hace es que lo transforma*/

// Manera manual

let strprimitivo = "hola"; // se define la variable de manera normal


const strobjeto = new String(strprimitivo); //agarra la variable y se envuelve en string, haciendo asi transformarla

console.log(strobjeto instanceof String) // se accede a la instancia

console.log(strobjeto.toLowerCase()); /*ya despues de hacer la transformacion.
 ya se puede hacer el uso de los atributos y metodos*/