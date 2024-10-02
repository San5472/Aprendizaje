import 'dart:mirrors';

class Carro {
 double?  peso; 
 String? marca;
 String? modelo;
 double? tamanio;  
}
class Celular {
 double? peso; 
 String? color;
 String? marca; 
}
class ventana {
  int? tamanio;
  int? ancho;
  String? color;
}

void main () { 
 Carro carro = new carro (); 
 Carro.peso = 1.200;
 Carro.marca = "toyota"; 
 Carro.modelo = "hilux"; 
 Carro.tamanio = 3;


 Celular b  = new Celular();
 Celular.peso = 2.5; 
 Celular.color = "blanco"; 
 Celular.marca ="huawei";

 ventana c = new ventana();
 Ventana.tamanio = 17;
 Ventana.ancho = 2;
 Ventana.color = "verde claro";


}