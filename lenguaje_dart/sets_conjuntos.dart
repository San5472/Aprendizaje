
import "dart:io";


 void main() {
  
 
 // un set es un conjunto de elementos desorganizados en los cuales no pueden estar repetidos esos elementos

 // como se debe de ver 

 Set <int> numeros = {1,2,3,4,5}; 
 Set <String> apellidos = {"zambrano","rondon","izaquita","toloza"};
 var deportes = {"futbol","boxeo","taijutsu"};

 // el tipo var, ayuda para declarar un tipo de variable sin definir su tipo de codigo, por ejemplo al colocar var el codigo ya sabe de que tipo de dato estoy trabajando
 
 // para poder añardir informacion a un conjunto seria
 apellidos.addAll({"morales"});
 print ("apellidos"); 
 // para hacer una iteracion de un conjunto es lo siguiente
 Set <String> frutas = {"manzana","uva","melon"};
 for (var fruta in frutas){
  print ("fruta");
 } 
 // para eliminar elementos de un conjunto seria de esta manera: 

 Set <String> herramientas = {"martillo","puntillas","clavos","destornillador"};
 herramientas.remove("puntillas"); 
 print (herramientas); 

 // para hacer operaciones comunes en el conjunto se debe de hacer lo siguiente 
 Set <int> numeros_grandes1={30,40,50};
 Set <int> numeros_grandes2= {60,70,80,90};

 // se utiliza el comando var


 var union = numeros_grandes1.union(numeros_grandes2);
 print(union);
 
 // para hacer diferencias entre los conjuntos
 var diferencias = numeros_grandes1.difference(numeros_grandes2);
 print (diferencias);

 // para verificar la existencia de un elemento dentro de un conjunto 

  Set <String> colores = {"amarillo","verde","marron","azul"};
  print(colores.contains("amarillo")); // true  
  print(colores.contains("morado"));  // false 

  // propiedades y metodos utiles de los conjuntos 

  // add:añade un elemento a un conjunto si no esta en ese
  // addAll: añade varios elementos a un conjunto 
  // remove: elimina un elemento de un conjunto
  // contains: verifica si un elemento pertenece a un conjunto
  // clear: elimina todos los elemetos de un conjunto 
  // union: une los elementos de 2 conjuntos diferentes
  // intersection: devuelve un nuevo conjunto de 2 conjuntos con un mismo elemento

  







} 