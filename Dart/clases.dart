
class Carro {
 double?  peso; 
 String? marca;
 String? modelo;
 double? tamanio;  

 Carro ({required this.peso, required this.marca, required this.modelo, required this.tamanio});
 @override
  String toString() {
    return 'Carro $peso, $marca, $modelo,  $tamanio';
  }
}
class Celular {
 double? peso; 
 String? color;
 String? marca;

 Celular({required this.peso, required this.color, this.marca}); 
 @override
  String toString() {
    return 'Celular $peso, $marca, $color';  
  }
}
class Ventana {
  int? tamanio;
  int? ancho;
  String? color;

  Ventana({required this.tamanio, required this.ancho, required this.color}); 

  @override
  String toString() {
    return 'Ventana $tamanio, $ancho, $color';
  }
}

void main () {
  Carro carro = new Carro(
    peso: 1.200,
    marca: "toyota",
    modelo: "hilux",
    tamanio: 3.0,
  );
  Celular celular = new Celular( 
    peso: 2.0,
    color: "rojo",
    marca: "huawei"
  );

  Ventana ventana = new Ventana(tamanio: 20, ancho: 10, color: "azul");
  
  print(celular);
  print(carro);
  print(ventana);
} 