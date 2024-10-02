# ciclos
son estructuras de control que permiten ejcutar una linea de codigo varias veces 
## el ciclo for 
la estructura de control es la siguiente 
for (iniciacion, condicion de contnuidad; expresion de actualidad) 
se ve de esta manera:
for (int i=1; i<=10; i++){
    print(i); 
}
### ciclo while

 el ciclo while se utiliza cuando se quiere repetir un codigo mientras una condicion sea verdadera.
como se ve el codigo es de esta manera 
int contador = 20;
while (contador >=1){
    print (contador);
    contador --;
}

## ciclo do - while
 el ciclo do- while es similar al ciclo while la unica diferencia es que el ciclo do-while si va a correr
 indenpendientemete si el ciclo es verdadero o falso.
 su algoritmo es el siguiente 
 do {
 stdout.write("ingrese un numero par:);
 numero = int.parse(stdin.readlineSync()!);
} while (numero % 2 !=0);
print ("el numero ingresado es el correcto");
