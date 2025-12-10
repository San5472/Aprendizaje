import express, { json } from 'express'
import { Pool, Query } from 'pg';
import pkg from 'pg'
import pool from 'Pool'
import dotenv from 'dotenv'
import { env } from 'process';
config.dotenv();

const app = express()
app.use = (express.json())

const password = process.env.PASSWORD_PG
const db = process.env.DB_NAME

try {
    const pool = new Pool({
        host: 'localhost',
        port: 5432,
        password: 'password',
        database: 'db'
    }); 
} catch (err) {
    res.status(500).send("Error en la conexion con la base de datos");
}

app.get('/usuarios', (req, res) =>{
    try{
        const usuarios = Pool.Query('select * from usuarios');
        res.json(usuarios.rows);
    } catch (err) {
        res.status(500).send("Error al traer los datos");
    } 
});

app.listen(3000, () => console.log("Ejecutandose en puerto http://localhost:3000"));