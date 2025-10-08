// se prepara de donde saldra la api

const usuariosApi = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers () {
    try {
        const response = await fetch(usuariosApi); // la pausa que se realiza que si esta biem o mal 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.ok}`) // si algo falla en el ok, que lo atrape
        }

        const usuarios = await response.json(); // Usar los datos en un json y que se pueda manejar los datos en esa variable

        usuarios.forEach(user => { // Busca algo de los datos
            console.log(`${user.id} 
                ${user.name} 
                ${user.email}`) // Datos que se quiere de la api 
        });
        return usuarios; // devolver la informacion
    } catch (error) {
        console.log("Error al obtener los datos", error.message);  // En caso de algun error devolver un error que se ejecuto durante la ejecucion 
    }
    
}

fetchUsers(); // hacer llamado de la función