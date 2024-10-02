class Animal{
    String? nombre;
    String? raza;
    String? pelaje;


    Animal (String raza, String pelaje){
    this.raza = raza; 
    this.pelaje = pelaje;
}

}


void main (){ 
Animal oso = new Animal("panda","lizo");
print(oso.raza);
print(oso.pelaje);
oso.nombre = "pacho";
print(oso.nombre);
}
