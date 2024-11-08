import 'dart:io';



void main(){
  print("diferente medios  de transporte 'C' para terrestre 'B' para acuatico");
  String seleccion = stdin.readLineSync()!;


  Logistica? logistica; 
  if (seleccion == 'C')  {
   logistica = LogisticaTerrestre();
 } else if (seleccion == 'B') {
  logistica = LogisticaAcuatica();
 } else {
  print ("Seleccion erronea");
  
 }

 Transport transport = logistica!.crearTransporte();
 transport.entrega();

}

 
abstract class Transport{
  void entrega();
}

class Camion implements Transport{
  @override
  void entrega(){
    print("entrega por servicio de Camion");
  }
  
}
class Barco implements Transport{
  @override
 void entrega(){
  print ("Entrega por servicio de barco");
 }
  
}

abstract class Logistica{
  Transport crearTransporte();
}

class LogisticaTerrestre implements Logistica{
  @override
  Transport crearTransporte(){
    return Camion();
  }
}

class LogisticaAcuatica implements Logistica{
  @override
  Transport crearTransporte(){
    return Barco();
  }
}
