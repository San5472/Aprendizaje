import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public"))); // Usar lo que se encuentra en la carpeta de public
app.use 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index_postman.html"))
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto http://localhost:${PORT}`);
})

