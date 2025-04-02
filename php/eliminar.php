<html>

<head>
  <title>Eliminar</title>
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
   

          $registros = mysqli_query($conexion, "select mail from aprendices
                where mail='$_REQUEST[mail]'") or
            die("Problemas en el select:" . mysqli_error($conexion));
            if ($reg = mysqli_fetch_array($registros)) {
                mysqli_query($conexion, "delete from aprendices where mail='$_REQUEST[mail]'") or
                die("Problemas en el select:" . mysqli_error($conexion));
                echo "Se efectuó el borrado del alumno con dicho mail.";
          } else {
            echo "No existe un alumno con ese mail.";
          }
        mysqli_close($conexion);
  ?>
</body>

</html>