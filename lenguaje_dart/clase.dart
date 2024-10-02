import 'dart:io'; 
void main () {
    print ("ingrese su informacion");
      for (int i = 1; i <= 5; i++) {
        print ("ingrese su nombre");

        String? nombre = stdin.readLineSync()!; 

        print ("ingrese el municipio en donde vive");

        String? municipio = stdin.readLineSync()!; 

        print ("ingrese la informacion de su placa");

        int placa = int.parse(stdin.readLineSync()!);
        var nombretotal = nombre.substring(nombre.length-2);
        var municipiototal = municipio.substring(0,3);
        var placatotal = placa.substring (placa.length - 3); 
        print ("su total de codigo es:  $nombretotal + $municipiototal + $placatotal");





      }

}