import express from 'express'
import { generarToken, verificarToken } from './jwt.js';
import dotenv from 'dotenv'


dotenv.config(); 
const app = express();
app.use(express.json()); 


app.post('/login', (req, res) => {
    const {nombre = "admin",  password = "1234"} = req.body

    if (nombre === 'admin' && password === '1234'){
        const token = generarToken({id: 1, nombre});
        return res.json({mensaje: 'Inicio de sesión exitoso', token})
    }else {
        res.status(401).json({error: 'Credenciales incorrectas'});
    }
});

app.get('/perfil', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({mensaje: 'Falta el token verificación'});

    const token = authHeader.split(" ")[1];
    const usuario = verificarToken(token);

    if(!usuario){
        return res.status(401).json({error: 'Token invalido o exprido, si se encuentra expirado por favor, realizar uno nuevo'});
    } else {
        res.json({mensaje: 'Acesso permitido', usuario});
    }

}); 

app.listen(3000, () => console.log(`Ejecutandose en el http://localhost:3000`));