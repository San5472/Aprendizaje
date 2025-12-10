import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.get('/prueba', async (req, res) => {
    try {
        const respuesta = await axios.get("http:/localhost:8000/api");
        res.json(respuesta.data);
    } catch (err) {
        res.status(500).send({error: "Error al conectarse con el servidor de la api"});
    }
}); 


app.listen(3000, ()=> console.log("servidor ejecutandose en http:localhost:3000"));