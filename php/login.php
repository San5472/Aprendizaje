<?php 



$servername = "localhost"; 
$database = "tests";
$username = "root"; 
$password = "";

$conexion = mysqli_connect($servername, $database,$username,$password);

if (!$conexion){
    die("No hay conexion con la Base de datos:" .mysqli_connect_error());
}

$nombre = $_POST["txtusuario"];
$password = $_POST["txtpassword"];

$query = mysqli_query($conexion,"SELECT * FROM login WHERE usuario = '".$nombre."' and password = '".$password."'");
$nr = mysqli_num_rows($query);

if ($nr == 1){
    echo "Bienvenido" .$nombre;
} else if ($nr == 0){
   echo "EL Usuario no existe";
}
?>