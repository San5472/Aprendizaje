class Celular{
	constructor(modelo,marca,color){
		this.modelo = modelo;
		this.marca = marca;
		this.color = color;
	}

	funcionar () {
		console.log(`El celular de marca ${this.marca} modelo ${this.modelo} con color ${this.color} funciona correctamente`);
	}

	dañado () {
		console.log(`El celular de la marca ${this.marca} modelo ${this.modelo} con color ${this.color} se encuentra dañado por favor revisar con su tecnico de confianza`);
	}
}

// hacer instancias de la clase
const celularAlto = new Celular("Smart", "Infinix", "titanio");
const celularBajo = new Celular("Huawei", "y9", "negro");


// acceder a un metodo
console.log(celularAlto.modelo);
console.log(celularBajo.marca);


// Imprimir usando el modelo
celularAlto.funcionar();
console.log(celularAlto.funcionar);

celularBajo.dañado();
console.log(celularBajo.dañado);

