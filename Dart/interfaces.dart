
// antes de iniciar el programa se tiene que definir la clase para que el programa se pueda iniciar
// desde la orden de la interfaz da



// esta es la interfaz de comparable

  class person implements Comparable<person>{

    String name;
    int age; 


    person(this.name, this.age); 

   override
    int compareto(person other){
    return age.compareto(other.age);
    
  }
}

void main () {
 var person1 = person("alice , 30");
 var person2 = person("pacho , 25"); 

 print (person1.compareTo(person2)); // salida (alice es mayor que pacho)



}


// interfaz iterable 

class shoppingcart extends iterable<String> {

 list<String> items = ["manzana" , "mandarina" , "zapote"]; 
 
 @override
 Iterable<String> get Iterator => items.iterator;
 

  }
  
 void main () {
 var cart = shoppingcart(); 

 for (var item in cart){ 
 print (item); // salida: manzana, mandarina , zapote


  // stream

  import "dart: async"; 

  void main () { 
  var controller = streamcontroller<int> ();

  controller.stream.listen ((data) {
    print ("data received: $data");

})); 
  controller.sink.add(1);
  controller.sink.add(2); 
  controller.close();


  }



 }


 }
}



// future 
Future<String> fetchuserData () async {
 await Future.delayed(duration(seconnds: 2));
 return "user data fetched successfully";
}

 void main async {
  print ("fetching user data...");
  var user data = await fetchuserdata ();
  print(userdata); // salida: 
 }
}


// interfaz de logger

import "package:loggin/loggin.dart"


void main () {


 logger.root.level = level.all; // nivel de registro de las personas
 logger.root.onrecord.listen ((record)){
  print ("${record.level.name}: ${record.time}: ${record.message}");
 }));

 // ejemplo de uso de looger 

 var logger = logger ("miAPP");
 Logger.info ("hola, este es un mensaje de informcion"); 
 logger. warning("cuidado, que algo no parece ir bien ");
 logger.severe ("el producto no va de la mejor manera");

 try {

 throw Exception("este es un ejemplo de error");
 } catch (e, stacktrace) {
  logger.shout ("excepcion captura!", e stacktrace");
  
 }



 }


}