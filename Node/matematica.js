const PI = 3.14


function sumar(x1, x2) {
	return x1 + x2
}

function restar(x1, x2) {
	return x1 - x2
}


function dividir(x1,x2) {
	if (x2 == 0) {
		return mostrarErrorDivision()
	} else {
		return x1 / x2
	}
}


function mostrarErrorDivision () {
	console.log('No se puede dividir entre cero')
}

module.exports = {
	PI,
	sumar,
	restar,
	dividir
}