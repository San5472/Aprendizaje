import express from 'express';
const app = express();


app.use(express.json());


let usuarios = [
    {id: 1, nombre: "santiago", apellido: "zambrano"}, 
    {id: 2, nombre: "David", apellido: "Izaquita" }
]



// optener todos los usuarios
app.get('/api/usuarios', ( req, res) => {
    res.json(usuarios);
});

// Obtener un usuario por id
app.get('/api/usuarios/:id', (req, res) =>{
    const id = parseInt(req.params.id); 
    const usuario = usuarios.find(u => u.id === id);
    
    if (!usuario) {
        return res.status(404).json({mensaje: "Usuario no encontrado"})
    }
    res.json(usuario);
    
});

// Crear un usuario
app.post('/api/usuarios', (req, res) =>{
    console.log(req.body)
    const datosUsuarios = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };

    usuarios.push(datosUsuarios);
    res.status(201).json(datosUsuarios);
}); 

app.put('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  usuario.nombre = req.body.nombre || usuario.nombre;
  usuario.apellido = req.body.apellido || usuario.apellido;

  res.json(usuario); 
});

app.delete('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter(u=> u.id !== id);
    res.json({mensaje: 'Usuario eliminado correctamente'})
});;

app.listen(3000, () => console.log('Servidor ejecutandose en http://localhost:3000'));