// este es un ejemplo propio del metodo abstract factory 
import 'dart:io';
void main (){
  print("¿Que quiere trabajar 1 - casauno 2 - casa2?");
  int seleccion = int.parse(stdin.readLineSync()!);

  Ferreteria ferreteria;

  if (seleccion == 1 ){
    ferreteria = Casauno();
    ferreteria.Cemento();
    ferreteria.Ladrillos();
  } else if (seleccion == 2) {
    ferreteria = Casados();
    ferreteria.Cemento();
    ferreteria.Ladrillos();
  }
}


abstract class Ferreteria{
  void Cemento();
  void Ladrillos();
}


class Casauno implements Ferreteria{
  @override
  void Cemento() {
    print("se va a hacer una casa de 2 pisos");
  }
  @override
  void Ladrillos() {
    print("se realizara un cuarto para guardar herramientas"); 
  }
}


class Casados implements Ferreteria{
  @override
  void Cemento() {
    print("se va a trabajar haciendo un muro"); 
  }
  @override
  void Ladrillos() {
    print("se va a utilizar los ladrillos para el muro");
  }
}