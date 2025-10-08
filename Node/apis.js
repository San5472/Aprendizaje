const post = "https://jsonplaceholder.typicode.com/posts/1" // de donse se tiene pensado traer el usuario


async function fetchPost () { // funcion async
    try {
        const response = await fetch(post);  // pausa de codigo

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.ok}`) // captura en caso de que este mal o bien
        }

        const posted = await response.json(); // se convierte la informacion en un json

            console.log(`${posted.id} 
                ${posted.title}
                ${posted.body}`
            ); // informacion que se espera obtener

        return posted; // lo que se espera regresar
    } catch (error) {
        console.log("Error al traer los datos", error.messsage); // aviso de errores
    }
}

fetchPost(); // llamado de la funcion