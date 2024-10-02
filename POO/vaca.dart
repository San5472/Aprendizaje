
class Colaborador{

  String? _nombreCompleto;
  int? _tipoColaborador;
  double _aporte = 0;

  Colaborador(String nombre, double aporte, int tipo){
    this._nombreCompleto = nombre;
    this._aporte = aporte;
    this._tipoColaborador = tipo;
  }

  String getNombreCompleto(){
    return this._nombreCompleto!;
  }

  int getTipo() => _tipoColaborador!;

  @override
  String toString(){
    return "su nombre es: ${this._nombreCompleto} su porte es: ${this._aporte} su tipo de colaboracion es: ${this._tipoColaborador}";
  }

  double getAporte(){
    return this._aporte;
  }

}

class Recolecta{
    List<Colaborador>? _colaboradores = [];
    double? _montoRecaudar;
    double? _balance;
    
    Recolecta(double monto, double balance){
        this._montoRecaudar = monto;
        this._balance = balance; 
    }
    void addColaborador(colaborador){
        this._colaboradores.add(colaborador);
            _balance = _balance! + colaborador.getAporte();
    }
    
    bool finalizacion(){
        if (_balance! >= _montoRecaudar!) {
            return true;
        } else {
            return false;
        }
    }
    List<Colaborador>? _generosos(){
        List<Colaborador> nueva = [];
        for (int i = 0; i < colaboradores.length; ++i){
            if (_colaboradores[i].getAporte() > 10000){
                nueva.add(_colaboradores[i]);
            }
        }
        return nueva;
    }
    
    double recaudoGenerosos(){
        double recaudo = 0;
        for (int i = 0; i < generosos().length; ++i){
            recaudo = recaudo + generosos()[i].getAporte();
        }
        return recaudo;
    }
    
    double promediogenerosos(){
        return recaudoGenerosos / generosos().length; 
    }
    double recaudoportipo(tipo){
        double = aprendiz = 0;
        double = instructo = 0;
        for (int i = 0; i < colaboradores.length; ++i){
            if(_colaboradores[i]get.tipo() ==1){
                aprendiz = aprendiz + 1;
            }
            if (_colaboradores[i]get.tipo() == 2){
            }
        }
        if (Tipo == 1){
            return aprendiz;
        } else {
            return instructor;
        }
    }
}
void main(){
    print ("¿cuanto se va recolectar?");
     double monto = double.parse(stdin.readLineSync);
     Recolecta recolecta = Recolecta (monto, 0);
     while (r.finalizada()){
         print ("ingrese su nombre");
         String nombre = String.parse(readlineSync()!);
         print ("ingrese la cantidad que quiera poner");
         double aporte = double.parse(readlineSync()!);
         print seleccion = ("ingrese su tipo si es 1: aprendiz o 2: instructor");
         int tipo = int.parse(readlineSync()!);
         Colaborador colaborador = Colaborador (nombre, aporte , tipo);
         r.addColaborador(colaborador);
     }
         
         print (r._colaboradores);
         print (r._balance);
         print (r._generoso());
         print (r._recaudogeneroso());
         print (r._promediogenerosos());
         print (r._recaudo(1));
         print (r._recaudo(2));
    
}