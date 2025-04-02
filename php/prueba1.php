<html>
  <head>
    <title>Problema</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    <body>
      <main>
        <header>
          <h1>Guardado de estudiantes</h>
        </header>
        <nav>
          <h3>Centro de automatizacion de guardado de informacion</h3>
        </nav>
        <aside>
          <p>Lugar de guardado de informacion Y procesamiento de esta Trabaja con el motor de base de datos
            PhpMyAdmin, capaz de poder ayudar al proceso de guardado, consulta y eliminacion de algun registro.
          </p>
          <img src="guardado.png" class="imagen">
        </aside>
        <br>
        <br>
        <section>
          <form action="prueba2.php" method="post">
            Ingrese el nombre:
            <br>
            <input type="text" id= "nombre" name="nombre" required>
            <br>
            Ingrese mail:
            <br>
            <input type="text" id="mail" name="mail" required>
            <br>
            Seleccione el curso:
            <br>
            <select name="codcurso">
              <option value="1">PHP</option>
              <option value="2">ASP</option>
              <option value="3">JSP</option>
                <input type="submit" value="Registrar">
            </select>
            <br>  
          </form>
          <br>
          <form action="bucar_estudiantes.php" method="post">
            Buscar el email:
            <input type="text" name="mail">
            <input type="submit" value="Buscar" required>
          </form>
          <br>
          <form action="eliminar.php" method="post">
            Ingrese el mail que desea borrar:
            <input type="text" name="mail">
            <input type="submit" value="Borrar aprendiz" required>
          </form>
            <br>
            <form action="visualizar_todo.php" method="post" >
              <button type = "submit"  name = "visualizar_todo">Ver todos los registros</button>
            </form>
        </section>
        <footer>
          <p>Linea de Contacto al WhatsAPP: 3128129344.</p>
        </footer>
      </main>
    </body>
</html>



  

