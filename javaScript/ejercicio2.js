const readline = require('readline'); // ingreso por la terminal 

console.log("Bienvenido");

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


interfaz.question("Ingrese su edad:", (edad) => {
    const edad_usuario = parseInt(edad);
    if (edad => 18){
        console.log("Procesando la informacion...");
    } else {
        console.log("tiene que ser mayor de edad");
    }

    interfaz.question("Ingrese sus ingresos:", (ingreso) => {
        const ingreso_usuario = parseInt(ingreso);
        if (ingreso => 1000){
            console.log("Calculando su porciento");
            const descuento = ingreso * 0.40;
            const ingresofinal = ingreso - descuento; 
            console.log("su resultado es:", ingresofinal);
        } else {
            console.log("Ingresos minimo, no aplica para descuento");
        }
        interfaz.close();
    });
    
});



 

