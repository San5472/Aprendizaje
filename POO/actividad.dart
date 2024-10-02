class Calculadora {
    double num1 = 0;
    double num2 = 0;
    String? operaciones;

    Calculadora (double num1, double num2, String operaciones){
        this.num1 = num1; 
        this.num2 = num2;
        this.operaciones = operaciones;
    }
double suma(){
    double suma = num1 + num2; 
    return suma;

}
double resta(){
    double resta = num1 - num2;
    return resta;

}
double multiplicacion(){ 
    double multiplicacion = num1 * num2;
    return multiplicacion; 
}
double division(){
    double division = num1 / num2;
    return division;

}

void calcular(){
    if(operaciones == "S"){

        print (suma());
    }else if (operaciones == "R"){
        print (resta());
        
    }else if (operaciones == "M"){
        print (multiplicacion());
    }else if (operaciones == "D"){
        print (division());
    }
    }
    
}



void main () {
    Calculadora a = new Calculadora(4,2,"S");
    a.calcular();


}




