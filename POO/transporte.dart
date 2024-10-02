class Transporte {
    String? marca;
}
class Terrestre extends Transporte{
    int? llantas; 
}
class Aereo extends Transporte{
    int? motores;
}
class Auto extends Terrestre{
    bool? aire;
}
class Moto extends Terrestre{
    int? cascos;
}
class Avion extends Aereo{
    static void manual(){
        print ("cambios"); 
    }
}
void main () {
    Auto auto = new Auto();
    auto.marca = "bmw";
    auto.llantas = 4;
    auto.aire = true; 

    Aereo a = new Aereo(); 
    a.motores = 4; 
    a.marca = "behelit";
    Avion.manual();

    Moto m = new Moto();
    m.cascos = 2;
    m.marca = "Ducati";
    m.llantas = 2;

}