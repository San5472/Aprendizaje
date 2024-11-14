
import 'dart:io';

void main (){
  print ("¿Que tipo de silla quiere hacer 1 - sillas victorianas 2 - sillas modernas?");
  int seleccion = int.parse(stdin.readLineSync()!);

  Chair chair; 

  if (seleccion == 1 ){
   chair = VictorianChair();
   chair.hasLegs();
   chair.sitOn();
  } else if (seleccion == 2) {
    chair = ModernChair();
    chair.hasLegs();
    chair.sitOn();
  } else {
    print("no hay mas tipos de sillas");
  }


}



abstract class Chair{
  void hasLegs();
  void sitOn();
}

class VictorianChair implements Chair{
  @override
   void hasLegs() {
    print("tiene patas la silla ");
  }
  @override
  void sitOn() {
    print("Si se puede sentar");
  }
}

class ModernChair implements Chair{
  @override
  void hasLegs() {
    print ("las patas son de una dimencion mas ancha"); 
  }
  @override
  void sitOn() {
    print("las sillas modernas son incomodas para sentar");
  }
}