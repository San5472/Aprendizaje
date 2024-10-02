## para colocar el inicio es de esta forma

sub inicio () 

la palabra inicio puede ser cambiada por cualquiera, automaticamente despues de poner el inicio se pone el fin 
## como es el fin 
end sub 

## para poner valores en una casilla
 se coloca de esta manera 
 range ("C8").value = 15 

despues de eso se pone el valor en la casilla C8.

### para saber el valor de una casilla

este sirve mucho si se desea saber el valor de una casilla en especifico.

msgbox range("A10").value

de esta manera nos va a mostrar el valor de esa casilla

## para imprimir una palabra 
se utiliza este codigo

msgbox ("mensaje a poner")

## para copiar los valores de una casilla y pasarlos a otra casilla 

range ("A1").copy  destination:= range.("c8")

