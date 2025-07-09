const PI = 3.14

function sumar (x1, x2){
	return x1 + x2
}

function restar (x1, x2){
	return x1 - x2
}


function dividir (x1, x2){
	if (dividir === 0){
		console.log(mostraErrorDivision)
	} else {
		return x1/x2
	}
}



function mostraErrorDivision () {
	console.log('No se puede dividir entre cero')
}

export {
	sumar, 
	restar,
	dividir,
	PI
}