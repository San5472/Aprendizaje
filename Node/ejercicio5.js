const fs = require('node:fs');


fs.Writefile('/archivo1.txt', 'linea1\nlinea 2', error =>{
	if (error)
		console.log(error)
	else
		console.log('Fue creado con exito el archivo1')
})

console.log("Linea de prueba de creacion de archivos")