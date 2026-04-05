async function obtenerDatos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users') // Pedir la informacion a la pagina de JSONplaceholder
        const data = await res.json();
        console.log(data)
    } catch (err){
      console.error("Error al obtener la info", err);
    }
}

obtenerDatos();