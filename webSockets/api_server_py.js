import express, { json } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    const { usuario } = req.body;

     const payload = {
        usuario: usuario
    };

    const token = jwt.sign(payload, process.env.jwt_user, {expiresIn: "5m"} );

    res.json({
        status: "ok",
        token: "token"
    });

}); 

app.listen(3000, () => console.log("Servidor ejecutandose en http://localhost:3000"));


