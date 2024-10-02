## Documentacion de la parte de dart

se empieza colocando las librerias como las cuales son: 
dart: io = para la entrada y salida de datos 
dart:math = para manejos matematicos

despues de haber abierto el programa se ingresa la cantidad de personas que van a jugar los cuales son:
el usuario y la maquina. 

dicho despues se añade las opciones para poder jugar las cuales son
### opciones 
piedra, papel o tijeras
estas opciones van con la dicha funcion var opciones ["en este espacio van las opciones"]

se abre un ciclo while en cual el programa va a correr hasta un cierto punto.

## ¿cual es el punto?
el punto en donde el ciclo parara sera cuando la persona presione la letra "x" que sera el punto en el cual termina el juego. 


se le da la opcion a la persona de escoger la opcion del juego y se utiliza un !.toLowerCase() para que cuando la persona escoga una opcion en mayuscula, la maquina esa cadena de texto la convierte en minuscula

despues  se inicia con un ciclo que si la otra persona selecciona una opcion que no es, el programa arrojara un error.


se coloca una funcion ramdon para que el computador seleccione de una manera aleatoria, se miraria de esta forma 
 Random random = Random();
    var random_num = random.nextInt(2);
    var eleccion_computer = opciones[random_num];

    despues se añade ciclos para la seleccion de las opciones de juego.

ya por ultimo se colocan print de manera que se la persona va ganando o perdiendo
y tambien el print de la cantidad de puntos que alcanzo