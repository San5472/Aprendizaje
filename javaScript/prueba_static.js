class Persona{
    constructor(sexo,color){
        this.sexo = sexo;  // atributos de la clase principal
        this.color = color; 
    }

    static caminar(){ // metodo static  
        return "puede camninar desde los seis meses" // return es lo que se devolvera a la final
    }
}

const bebe = new Persona("masculino", "blanco"); //propiedades del objeto
console.log(Persona.caminar()); // llamado del metodo static

