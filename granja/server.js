import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import conexion from './conexion.js';  // importación de la base se datos
import { connect } from "http2";



const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })) // Poder leer los datos en los formularios
app.use(express.json());

app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index.html"))
});


app.get("/trabajadores", ( req, res) => {
    const sql = "SELECT * FROM trabajadores";
    conexion.query(sql, ( err, result) => {
        if(err){
            res.status(500).send("Error al traer la información de los trabajadores")
        } else {
            res.json(result);
        }
    });
});


app.post("/guardarTrabajadores", (req, res) => {
    const { nombre, apellido, telefono, rol } = req.body;

    const sql = "INSERT INTO trabajadores (nombre, apellido, telefono, rol ) VALUES (?, ?, ?, ?) ";
    conexion.query(sql, [ nombre, apellido, telefono, rol ], ( err, result ) => {
        if (err) {
            res.status(500).send("Error al guardar", err)
        } else {
            res.send("Guardado en el sistema");
            console.log("Guardado correctamente");
        }
    });
});

app.post("/guardarvacas", ( req, res) => {
    const { raza, estado } = req.body;

    const sql = "INSERT INTO vacas ( raza, estado ) VALUES ( ?, ? )";
    conexion.query(sql, [ raza, estado ], ( err, result ) => {
        if (err) {
            res.status(500).send("Fallo al guardar", err);
        } else {
            res.send("Guardado correcto");
            console.log("Guardado correctamente");
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto http://localhost:${PORT}`);
});


