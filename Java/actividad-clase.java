class Transporte {
    public String empresa = "cochofal";
    public String ciudad = "barranquilla"; 

    public String getInfo(){
        return this.empresa +    "-" + this.ciudad; 
    }
}
class Publico extends Transporte{
    private int ninterno;
    public String ruta;

    public Publico (int n){
        this.ninterno = n;
    }
    public String getCodigo(){
        return this.ruta + "-" + this.ninterno;
    }
}
class particular extends Transporte{
    public String placa;
    public String color; 
    private int modelo; 

    @Override
    public String getInfo(){
        return this.ciudad;
    }
    public particular(int modelo){
        this.modelo = modelo;
    }
    public int getRtm(){
        return this.modelo + 5;
    }
}
//la creacion de las clases deben ser en minusculas 
public class main {
    public static void main(String[] args){
        Publico publico = new Publico(100);
        publico.ruta = "Atlanctico";
        System.out.println(publico.getCodigo());


        particular particular =  new particular(2022);   
        particular.placa = "hxn169";
        particular.color = "gris";
        System.out.println(particular.getInfo());
        System.out.println("la revision tecnomecanica se hace cada" + particular.getRtm());
        
        particular normal = new particular(2024);

        normal.placa = "cdl 541";
        normal.color = "azul metalico";
        System.out.println(normal.getInfo());
        System.out.println("la revision tecnomecanica se hace cada" + normal.getRtm());
        
        
    }
}
