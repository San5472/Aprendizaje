
## funciones 

## metodos de instancia

class mi clase 
    def metodo_de_instancia

    end
end 

objecto = Miclase.new
objecto.metodo_de_instancia

## metodos de clase 

class persona 
    @@contador = 0 
    def initialize (nombre)
        @nombre = nombre
        @@contador += 1
    end   

    def self.contador_total
        @@contador
    end 
end

#se crea algunas personas 
persona1 = persona.new ("santiago")
persona2 = persona.new ("keiner")
persona3 = persona.new ("kylie")

# acceder al metodo de la clase para obtener el contador total de personas
 puts "total de personas creadas #{persona.contador_total}"


 ## metodos privados 

 class ejemplo
    def metodo_publico
        puts "este es un metodo publico"
        metodo_privado 
    end
    private 

    def metodo_privado
        puts "este es un metodo privado"
    end     
end 
objeto = Ejemplo.new

objeto.metodo_publico
objeto.metodo_privado


## metodos protegidos 

class persona 
    def initialize (nombre)
        @nombre = nombre
    end 
    
    def saludar (other_ person)
        puts "hola, #{other_person.nombre}. soy #{nombre}."

    end 
    protected
    
    def nombre
        @nombre 

    end 
    
end 

class amigo<persona 
    def saludar_amigo (other_person)
        puts "hola, #{other_person.nombre}. soy tu amigo #{nombre}."

    end 
end 

Persona1 = persona.new ("alice")
Persona2 = amigo.new ("bob")

persona1.saludar(persona2)
persona2.saludar_amigo(persona1)



# metodos publicos 


class saludo 
    def Saludar (nombre)
        puts "hola , #{nombre}"
    end
end 

saludo = saludo.new 

saludo.saludar("mundo")
