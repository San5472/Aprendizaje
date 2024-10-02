# ciclo for
apellidos = ["zambrano","izaquita"]
for apellido in apellidos do 
    puts "hola, #{apellidos}!"
end 

## ciclo while 
contador = 0 
while contador < 5 do 
    puts "contador: #{contador}"
    contador +=1 
end 

### ciclo loop
contador = 0 
loop do 
    puts "contador: #{contador}"
    contador +=1 
    break if contador >= 5 
end 

#### ciclo until 
contador = 0 
until contador>= 5 do 
    puts "contador: #{contador}"
    contador +=1 
end

##### ciclo each 
[o,1,2,3,4]. each do |1| 
    puts "iteraccio: #{numeros}"
end
###### ciclo times 
20.times do |i| 
 puts "este es el mensaje que se va repetir tantas veces #{i}
end 