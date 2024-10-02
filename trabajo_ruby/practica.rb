puts "ingrese la cantidad de estudiantes"
estudiantes = gets.chomp.to_i

for i in 1..a 
    puts "ingrese el nombre del estudiante"
    nombre = gets.chomp.to_i
    n = nombre.length - 1
    invert = ""
    for b in (n...a).step (-1)
        c = nombre [b]
     invert = invert + C 
    end 
    puts ("el nombre es #{nombre} su forma invertida es #{invert}")
end  