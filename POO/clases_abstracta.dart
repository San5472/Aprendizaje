
abstract class Celulares{
  String? nombre;
  void camaraUNica(); 
}

class Huawei implements Celulares {
  
  String? nombre;
  @override
  void camaraUNica(){
    String celucohu = ("buena camara");
    print(celucohu);
  }

} 
class Samsung implements Celulares{
  
  String? nombre;
  @override 
  void camaraUNica(){
    String celucosam = ("camara mas o menos");
    print(celucosam);
  }
}
class Iphone implements Celulares{
  
  String? nombre;
  @override
  void camaraUNica(){
    String celucoip = ("celular tal");
    print(celucoip);
  }
}

void main() {
   Celulares huawei = Huawei();
   Celulares samsung = Samsung();
   Celulares iphone = Iphone(); 


  huawei.camaraUNica();
  samsung.camaraUNica();
  iphone.camaraUNica();
}