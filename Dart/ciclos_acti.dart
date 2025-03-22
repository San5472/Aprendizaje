import 'dart:io'; 

void main () {
  // ciclo for
 for (int i=1; i<=10; i++){
  print (i);
 }
 //ciclo while 
 int contador = 20;
 while (contador >= 1){
  print ("contador"); 
  contador--; 
 }
 /// ciclo do-while 
 int numero; 
 do {
 stdout.write("ingrese un numero par:");
 numero = int.parse(stdin.readLineSync()!);
 } while (numero % 2 !=0);
 print ("correcto el numero ingresado es par");

 }
 

 
}