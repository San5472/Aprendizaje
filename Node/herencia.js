class Padre{
	constructor(color,apellido,ojos){
		this.color = color;
		this.apellido = apellido;
		this.ojos = azul;
	}


	color() {
		this.ojos = azul;
		console.log( `tiene el color de los ${this.ojos} como el papa`); 
	}
}


class Hija extends Padre {
	constructor(color,apellido,cabello){
		super(ojos)
		this.cabello = cabello;
	}


	color () {
		console.log(`Mismo color de ojos que el papá que son ${this.ojos}`);
	}

}
console.log(Hija.color);


console.log("pene")

