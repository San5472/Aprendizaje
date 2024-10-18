
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
class Ventana {
  int? tamanio;
  int? ancho;
  String? color;
}

void main () { 
  Carro carro = Carro (){ 
    Carro.peso = 1.200;
    Carro.marca = "toyota"; 
    Carro.modelo = "hilux"; 
    Carro.tamanio = 3; 
  


    Celular b  = Celular();
    Celular.peso = 2.5; 
    Celular.color = "blanco"; 
    Celular.marca ="huawei";

    Ventana c =  Ventana();
    Ventana.tamanio = 17;
    Ventana.ancho = 2;
    Ventana.color = "verde claro";
  }    
}