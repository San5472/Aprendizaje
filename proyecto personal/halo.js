const imagenes = document.querySelectorAll('.imagen-container img');

imagenes.forEach((img) =>{
    img.addEventListener('click', () => {
        alert('bro este juego es bueno depende del gusto de la persona: ${img.alt}')
    });
}); 