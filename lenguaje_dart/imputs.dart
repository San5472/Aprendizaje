import 'dart:io';
void main(){
  print ("ingrese un nomnbe"); 
  String? nombre = stdin.readLineSync(); 

  print ("Coloque un apellido"); 
  String? apellid = stdin.readLineSync();

  print ("Coloque los numeros que quiera sumar");
  int? num1 = int.parse(stdin.readLineSync()!);

  print ("ingrese un segundo numero");
  int? num2 = int.parse(stdin.readLineSync()!);

  print ("ingrese el tercer numero"); 
  int? num3 = int.parse(stdin.readLineSync()!);

  int suma = num1 + num2 + num3;
  double promedio = suma/3;

  print ("la persona con el nombre $nombre y apellido $apellid tiene un promedio de $promedio");
  
}