# que son las interfaces o clases

son el fundamento pricipal para la programacion orientada a objectos, permite a los desarrolladores 
crear objetos, estos moldes describen las propiedades (datos) y los metodos (funciones o comportamientos) que tendran los objetos.


## como se va a definir una clase 
para hacer uso de una interface se hace uso de las palabras reservadas keywoard "class", seguidas del nombre de la clase despues se necesita el uso de corchetes curvos para poder terminar de hacer uso de la clase.

es importante saber no se crean dentro de un widget sino que se ponen fuera de estos objetos.

### los tipos de interfaces que existen


1. logger 

2. comparable 

3. iterable 

4. stream 

5. future

son mas tipos de clases que existen pero estas son las mas importantes


### uso de las interfaces 

sirven para definir un contrato que cualquier clase que las implemente debe de cumplir. 

eso quiere decir que la clase debe de tener todos los requerimientos y todas las opciones dirigidas por la interface.


### ventajas del uso de las interfaces.

1. abstraccion 
las interfaces permiten definir un contrato en el que cualquier clase debe de poder cumplir. 

2. poliformismo 

las interfaces permitan que una clase pueda de una trabajar de una manera diferente dependiendo del objeto que se le de.

3. reutilizacion de codigo  

las interfaces permiten reutilizar codigo en diferentes clases, reduciendo la duplicidad y facilitando la mantebilidad.


### desventajas 


1. difilcultad de implementacion: 

son algo dificiles de utilizar correctamente, y mas si se trata de utilizar varias interfaces a la vez.

2. difilcultad de implementacion 

las interfaces no permiten la implementacion de metodos con parametros de tipo "dynamic" lo que pueda llevar a difilcultar el uso de estas mismas.

3. no hay implementacion por defecto

significa que cualquier clase que las implemente debe de proporcionar una implementacion explicita para cada metodo y propiedad definida en la interfaz 

4. no hay herencia 

significa que una clase no puede hererdar de otra clase y luego implementar una interfaz, no se puede debido a que la clase debe de seguir lo que la interfaz tenga.

hay mas pero estas son como las mas importantes.