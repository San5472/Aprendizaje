import 'dart:convert';

class Recolecta{

  double? montoRecaudar; 
  double? balance;

  Recolecta (String s){
    Map <String, dynamic> map = jsonDecode(s);
    this.montoRecaudar = map ['montoRecaudar'];
    this.balance = map ['balance'];  
  }      
}

void main (){
  String json = '{ "nombreCompleto" : "santiago","montoRecaudar" : 10.000,"balance" : 5.000}';

  Recolecta recolecta = Recolecta(json);
  print(recolecta.montoRecaudar);
  print(recolecta.balance); 

}
