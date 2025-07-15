const os = require('node:os')


console.log('Su sistema operativo es:'+ os.platform());
console.log('Su versión del sistema operativo es'+ os.release());
console.log('La memoria del sistema operativo es de:' + os.totalmem() + ' bytes ');
console.log('Arquitectura del CPU:' + os.arch());
console.log('Numeros de procesos logicos' + os.cpus().length);
console.log('El total de memoria es de:' + os.freemem() + ' bytes ');


os.cpus().forEach(cpu => {
	console.log('Nombre' + cpu.model);
	console.log('Núcleos' + os.cores);
})