import 'dart:io';

void main(){

  Dialogo dialogo;
  Button buton;

 print("1 para hola, 2 para bye");
int seleccion = int.parse(stdin.readLineSync()!);

 if (seleccion == 1) {
  dialogo = VentanaDialogo();
  buton = dialogo.CrearButton();
 buton.onClick(); 
 } else if (seleccion == 2) {
  dialogo = HtmlDialogo();
  buton = dialogo.CrearButton();
  buton.onClick();

 } else {
  print("malo"); 
 }
 

}

abstract class Button{
  void onClick();
}

class VentanaButton implements Button{
  @override
  void onClick(){
    print("hola"); 
  }
}
class ButtonHtml implements Button{
  @override
  void onClick(){
    print ("bye");
  }
}

abstract class Dialogo{
 Button CrearButton();
}

class VentanaDialogo implements Dialogo{
  @override
  Button CrearButton(){
    return VentanaButton();
  }
}

class HtmlDialogo implements Dialogo{
  @override
  Button CrearButton(){
    return ButtonHtml();
  }
}