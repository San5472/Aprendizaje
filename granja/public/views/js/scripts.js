document.addEventListener("DOMContentLoaded", () =>{
    const mostrarTrabajadores = document.getElementById("tabla-trabajadores tbody");
    const formTrabajadores = document.getElementById("formTrabajadores");

    if(!mostrarTrabajadores || !formTrabajadores) return;

    async function cargarTrabajadores() {
        try{
            const res = await fetch("/trabajadores")
            const data = await res.json();

            tablaBody.innerHTML = "";
            data.forEach((t) => {
                const fila =`
               <tr>
                    <td>${t.id}</td>
                    <td>${t.nombre}</td>
                    <td>${t.apellido}</td>
                    <td>${t.telefono}</td>
                    <td>${t.rol}</td>
                </tr>
            `;
            });
            tablaBody.insertAdjacentHTML("beforeend", fila)

        } catch (err) { 
            console.error("Error al traer los datos", err)
        }
    }

    // Recargado de la pagina

    formTrabajadores.addEventListener("submit", async(e) => {
        e.preventDefault()

        const formData = new FormData(formTrabajadores);
        const datos = Object.fromEntries(formData.entries());

        try{
            const res = await fetch("/guardarTrabajadores", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(datos)
            });

            if (res.ok) {
                formTrabajadores.reset();
                await cargarTrabajadores();
            } else {
                alert("Error al guardar el guardar el trabajador")
            }
        } catch (err) {
            console.error("Error al guardar", err)
        }
    });

    cargarTrabajadores();

});


