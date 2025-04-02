<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<title>Creacion de alumno</title>
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

  mysqli_query($conexion, "insert into aprendices(nombre,mail,codcurso) values 
                       ('$_REQUEST[nombre]','$_REQUEST[mail]',$_REQUEST[codcurso])")
    or die("Problemas en el select" . mysqli_error($conexion));
  mysqli_close($conexion);
        echo "El nuevo aprendiz fue creado.";
echo "<br>";
echo "<hr>";

$ar = fopen("datos.txt", "a") or
    die("Problemas en la creacion");
  fputs($ar, $_REQUEST['nombre']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['mail']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['codcurso']);
  fputs($ar, "\n");
  fputs($ar, "--------------------------------------------------------");
  fputs($ar, "\n");
  fclose($ar);
    echo "Los datos se cargaron correctamente.";
?>
</body>
</html>