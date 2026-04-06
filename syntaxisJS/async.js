async function obtenerDatos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Me traigo la api de afuera 
        const data = await res.json() // Espera a que la busquedad se realize y guarda los datos
        console.log(data) // Imprimir los datos
        
    } catch (err) {
        res.status(500).json({message: "Error al traer los datos de la api"}); // En caso de error imprimir ese mensaje
    }
}

obtenerDatos();