# para crear un nuevo conjunto 
set.new ([1,3,5,8])
## para poder añadir elementos a un connjunto
set.new [1,2,4,5]
conjunto.add (3)
puts conjunto.inspect
## para eliminar algun elemento del conjunto 
conjunto.delete (3)
puts conjunto.inspect

## verificar la pertenencia de elementos

puts conjunto.incluide? (5) #true
puts conjunto.incluide? (6) #false 

## union de conjuntos

union = conjunto | otro_conjunto 
puts union.inspect
## para mostrar los resultados
puts "conjunto 1" #{conjunto1.inspect}"
puts "conjunto 2 #{conjunto2.inspect}" 
puts "union de conjunto 1 y conjunto 2 #{union.inspect}"

## para poder poder limpiar un conjunto de esta manera 

conjunto = set.new [1,2,3,4,5]
tamanio = conjunto.size 
puts "el tamaña del conjunto es de #{tamanio}"
## esto indica como lo grande que es el conjunto, si un conjunto es de 5 elementos entonces el conjunto tiene un tamaño de 5 

## para verificar si un conjunto esta vacio o no es de la siguiente manera 

puts conjunto.empy? #true 


# para hacer limpiar un conjunto se debe de hacer con esta manera

conjunto.clear

