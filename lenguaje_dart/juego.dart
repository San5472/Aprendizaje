import "dart:math";
import "dart:io"; 

void main () {
  var user_wins = 0;
  var computer_wins = 0;

  var opciones = ["piedra", "papel", "tijeras"];

  while(true){
    print ("selecciona piedra, papel, tijeras y si quieres terminar el juego pulsa x"); 
    var eleccion_usuario = stdin.readLineSync()!.toLowerCase();

    if (eleccion_usuario.toString() == "x"){
      break;
    }
    if (!opciones.contains(eleccion_usuario)){
      print ("error al escoger, introduzca piedra, piedra, papel, tijera");
      continue;

    }
    
    Random random = Random();
    var random_num = random.nextInt(2);
    var eleccion_computer = opciones[random_num];

    print("el computador ha elegido $eleccion_computer");
    
    if (eleccion_usuario == "piedra" && eleccion_computer == "tijeras") {
      print ("has ganado");
      user_wins++;
    } 
    
    else if (eleccion_usuario == "papel" && eleccion_computer == "piedra") {
      print ("has ganado");
      user_wins++; 
    }

    else if (eleccion_usuario == "tijeras" && eleccion_computer == "papel") {
      print ("has ganado"); 
      user_wins++;
    } else {
      print ("has perdido");
      computer_wins++;
    } 
    
  }

  print ("tus puntos son: $user_wins");
  print ("los puntos del computador son: $computer_wins"); 
  if (computer_wins > user_wins){
    print ("ha ganado el computador"); 
  }else{
    print ("has ganado");
  }

}