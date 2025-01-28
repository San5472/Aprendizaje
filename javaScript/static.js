class Usuario{
    static saludar(){
        return "Hola"
    }
}

console.log(Usuario.saludar()); // esta es la manera correcta, primero la clase y luego el metodo static

const instancia = new Usuario();
// console.log(instancia.saludar). Esta es la manera incorrecta de llamar un metodo static...