void main (){
  String nombres = "santiago david";
  String apellidos = "zambrano izaquita";
  int edad = 18; 
  String ciudad = "Barranquilla"; 
  String educacion = "SENA";
  double resultado = 3.0; 
  
  bool mayordeedad = edad >= 18;
  if (mayordeedad) {
    print ("mayor de edad");
  } else {
    print ("menor de edad");
  }
  print ("hola me llamo $nombres $apellidos, tengo $edad, actualmente vivo en la ciudad de $ciudad y estudio en el $educacion,tengo un resultado de $resultado y soy $mayordeedad");
}
  
