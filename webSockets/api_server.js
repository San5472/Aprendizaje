import express, { json } from 'express'

const app = express(); 

app.use = (express.json())

const estudiantes = [
    {id: 1, nombre: "santiago", apellido: "zambrano", edad: 19},
    {id: 2, nombre: "Luisa", apellido: "Marquez", edad: 20 },
    {id: 3, nombre: "Stefany", apellido: "Izaquita", edad: 25}
];

app.get('/', (req, res) =>{
    res.send('Api prueba');
});

app.get('/api/estudiantes', (req, res) => {
    res.send(estudiantes)
});

app.get('/api/estudiantes/:id', (req, res) => {
    const estudiante = estudiantes.find(c => c.id  === parseInt(req.params.id))
    if (!estudiante){
        return res.status(404).send('Estudiante no fue encontrado');
    } else {
        return res.send(estudiante);
    }
});


app.post('/api/estudiantes', (req, res) => {
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: parseInt(req.body.edad)
    };

    estudiantes.push(nuevoEstudiante);
    res.send(nuevoEstudiante)
});

app.delete('/api/estudiante/:id', (req, res) =>{
    const estudiante = estudiantes.find(c => c.id === parseInt(req.body.id));
    if (!estudiante){
        res.status(404).send('Estudiante no encontrado')
    } else {
        return res.send (estudiante);
    }

    const index = estudiantes.indexOf(estudiante); 
    estudiantes.splice(index, 1);
    res.send(estudiante)
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Puerto ejecutandose en http://localhost:${PORT}`);
})