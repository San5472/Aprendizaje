import 'dart:convert';

class Colaborador{
  String? nombreCompleto;
  int? tipoAporte;
  double? aporte;

  Colaborador (String  s){
     Map<String, dynamic> map = jsonDecode(s);
    this.nombreCompleto = map ['nombreCompleto'];
    this.tipoAporte = map ['tipoAporte'];
    this.aporte = map ['aporte'];

   
  }
  
}

void main(){

  String json = '{"nombreCompleto": "santiago", "tipodeAporte": 1, "Aporte": 10.000}';

  Colaborador colaborador = Colaborador(json);
  print(colaborador.nombreCompleto);
  print(colaborador.tipoAporte);
  print(colaborador.aporte);
}