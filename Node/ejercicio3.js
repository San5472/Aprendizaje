const os = require('node:os');

console.log('Su espacio libre en memoria es:' + os.freemem() + ' bytes ');


let almacenaje = [];

for (let i = 0; i < 1000000; i++){
	almacenaje.push(i)
}

console.log('La cantidad de memoria es de' + os.freemem() + ' bytes ' );

