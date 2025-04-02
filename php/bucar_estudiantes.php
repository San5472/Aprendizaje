<?php

    ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$servername = "sql202.infinityfree.com"; 
$database = "if0_38498392_estudiantes";
$username = "if0_38498392"; 
$password = "12hnkEmnlMb0";  


$conexion = mysqli_connect($servername, $username, $password, $database);

if (!$conexion) {
    die("Problemas con la conexión a la base de datos: " . mysqli_connect_error());
}

$mail = isset($_POST['mail']) ? $_POST['mail'] : '';

$query = "SELECT * FROM aprendices WHERE mail = '$mail'";
$registros = mysqli_query($conexion, $query);


if ($reg = mysqli_fetch_array($registros)) {
    echo "El Nombre del aprendiz es: ". $reg['nombre'] . " y su mail es: " . $reg['mail'];
} else {
    echo "No hay aprendices con ese correo electrónico.";
}


mysqli_close($conexion);


?>
