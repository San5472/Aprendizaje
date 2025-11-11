import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config();

export const generarToken = (usuario) => {
    return jwt.sign(
        {id: usuario.id, nombre: usuario.nombre},
        process.env.JWt_KEY,
        {expiresIn: process.env.JWt_KEY || "60s"  }
    );
};

export const verificarToken = (token) =>{
    try{
        const decoded = jwt.verify(token, process.env.JWt_KEY);
        return decoded
    } catch (error) {
        return null;
    }
}; 