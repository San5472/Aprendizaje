import 'dart:io';

void main () {
 print ("ingrese la cantidad de estudiantes");
 
 int ce = int.parse(stdin.readLineSync()!);

 for (int i= 1; i<=ce; i++){
 print ("ingrese cual es el nombre del estudiante");
 String nombre = stdin.readLineSync()!;
 int longitud = nombre.length;
 String nombreinvertido = "";
 
 for (int b = longitud - 1; b >=0; b--) {
  nombreinvertido += nombre [b];


 }
 print ("su nombre es $nombre y esta de la manera invertida es $nombreinvertido ");


 }


}