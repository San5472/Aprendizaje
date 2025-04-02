<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<title>Todos aprendices</title>
</head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "sql202.infinityfree.com"; 
$database = "if0_38498392_estudiantes";
$username = "if0_38498392"; 
$password = "12hnkEmnlMb0";  

$conexion = mysqli_connect($servername, $username, $password, $database) or
    die("Problemas con la conexión");

if (isset($_POST['visualizar_todo'])) {
    $sql =  "SELECT * from  aprendices";
    $result = $conexion->query($sql);

    
    if($result->num_rows > 0){
        echo  "<table border = '1'>";
        echo "<tr>
            <th>Id</th>
            <th>nombre</th>
            <th>email</th>
            <th>codcurso</th>
        </tr>";


    while ($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>".$row["id"]."</td>
            <td>".$row["nombre"]."</td>
            <td>".$row["mail"]. "</td>
            <td>".$row["codcurso"]."</td>
        </tr>";
    }
}
    echo "</table>";

} else {
    echo "No hay registros"; 
}

$conexion->close();

?>