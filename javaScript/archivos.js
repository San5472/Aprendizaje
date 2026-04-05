import fs from 'fs'

const contenido = fs.readFileSync('./data.txt', 'utf-8'); // Me permite leer el archivo

// Escribir en el archivo 
fs.writeFileSync('./output.txt', 'Hola pepe');

// Leer JSON
const data =JSON.parse(fs.readFileSync('./data.json', 'utf-8'))