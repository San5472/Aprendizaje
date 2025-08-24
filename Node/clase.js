class Carro {
	constructor(placa, modelo, color) { // el constructor es el que crea las plantillas de los atributos.
		this.placa = placa;
		this.modelo = modelo;
		this.color = color;
		this.encendido = false; //propiedad por defecto
	}


	encender () {
		this.encendido = true;
		console.log(`El vehiculo con placa ${this.placa} y modelo ${this.modelo} con color ${this.color} se ha encendido`);
	}


	apagado () {
		this.encendido = false;
		console.log(`El vehiculo con placa ${this.placa} y modelo ${this.modelo} con color ${this.color} se encuentra apagado`);
	}
}



// instancias de la clase principal.

const carroDeportivo = new Carro ("hxn169","Duster","rojo");
const carroFamiliar = new Carro ("255","skyline","negro");


// Acceder a las propiedades.
console.log(carroDeportivo.modelo);
console.log(carroFamiliar.placa);


// Acceder a los modelos de las clases.
carroDeportivo.encender();
console.log(carroDeportivo.encender);