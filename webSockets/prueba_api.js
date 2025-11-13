import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

const nombre = process.env.AUTOR;
const entorno = process.env.ENTORNO;

app.get('/info', (req, res) =>{
    res.json({
        autor: `Nombre del papu ${nombre}`,
        mensaje: `Prueba en ${entorno}` 
    });
});

app.listen(3000, () => {console.log(`Servidor ejecutandose en http://localhost:3000`)});