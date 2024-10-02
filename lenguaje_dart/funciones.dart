void main () {
 // se va a definir los que son las funciones 
 // las funciones son instrucciones que se le da a la maquina para que pueda hacer sierta accion
 // ejemplo 
 int sumar ("int a , int b");
 return a + b;
 // ya ahora despues de haber definido un poco las funciones dire cuales son los tipos

 // funciones de nivel superior 
 //son aquellas que se pueden trabajar en cualquier parte del codigo, y ese mismo codigo se puede llamar desde cualquier parte del codigo 
 //ejemplo 
 void saludar () {
  print ("hola mundo"); 

  // funciones de instancia 
  // las funciones de instancia, mas que todo se define una clase y se quiere que esa clase tenga ciertas caracteristicas que se quiere que tenga
   
    class robot {
      string nombre; 
      robot (this.nombre);
      void saludar () {

      print ("hola me llamo $nombre"); // funcion de instancia para que el robot se presente y diga su nombre
     

     // funciones de flecha

     int sumar flecha (int a , int  b) => a + b; 
     void main () {
      print (sumar(3,5)); 
     }

      // funciones anonimas
      // son aquellas sin un nombre especifico. en lugar se define en el momento y lugar en donde se necesite, usualmente de otra funcion o asignada a una variable

      var listas [1,2,3]; 
      //metodo for.each aplicado para las listas 
      listen.for each ((elemento)) {

        // funcion anonima que imprime el double de cada elemento
        print ( elemnto * 2);
       

       // funciones de cierre
       // son aquellas que pueden manipular variables que estan destinadas fuera de ella, incluso despues de que la funcion haya sido invocada
       // ejemplo 

       var sumador (int a){
        int b = 2; 
        return (int c){
          return a + b + c;

         void main () {
         varsumacon5 = sumador(5); 
         print (sumacons5(3));



         // funciones de fabrica
         // las funciones de fabrica son aquellas que se utilizan para crear y retornar instancias de esa misma clase a diferencia de los constructores

         clas carro {
          String modelo; 
          int anio; 
          // constructor privado

          carro._(this.medelo, this.anio);
          // funcion de fabrica para crear un carro nuevo
          factory carro.nuevo(String modelo, int anio){
            return carro._(modelo, anio);
  
            void main () {
              var mi carro = como nuevo("toyota , 2023"); 
              print ("compre un carro ${micarro.medelo} del año ${micarro.anio}");


            }



      

          }


         }
       


         }
        }


       }
      }










      
      }



     



   }


 } 




}