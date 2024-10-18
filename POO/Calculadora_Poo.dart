
import 'dart:io';


class Calculadora {
    double num1 = 0;
    double num2 = 0;
    String? operaciones = ""; 

    Calculadora (double num1, double num2, String operaciones){
        this.num1 = num1; 
        this.num2 = num2;
        this.operaciones = operaciones;
    }
  double suma(){ 
  return (num1 + num2);
  }
  double resta(){
  return (num1 - num2);
  }
  double multiplicacion(){ 
  return (num1 * num2); 
  }
  double division(){
  return (num1 / num2);
  }

  void calcular(){
    if(operaciones == "suma"){
      print (suma());
    }else if (operaciones == "resta"){
      print (resta());
    }else if (operaciones == "multiplicacion"){
      print (multiplicacion());
    }else if (operaciones == "division"){
      print (division());
    } else {
    print("no se logro realizar la operacion"); 
    }
  }
    
}


void main () {    
  print ("ingrese un numero");
  double primero  = double.parse(stdin.readLineSync()!); 

  print ("ingrese el otro numero");
  double segundo = double.parse(stdin.readLineSync()!);
  
  print ("¿Que quieres hacer? suma, resta, multiplicacion o division"); 
  String tercero = stdin.readLineSync()!;

  Calculadora nueva = Calculadora(primero,segundo, tercero);
  nueva.calcular(); 

}


