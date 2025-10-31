import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config();        


const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "granja",
    password: process.env.PASSWORD_db
});

conexion.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("Conexión establecida");
    }
});


export default conexion;