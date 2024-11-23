const imagenes = document.querySelectorAll('.imagen-container img');

imagenes.forEach((img) =>{
    img.addEventListener('click', () => {
        alert('realizaste un click en: ${img.alt}')
    });
}); 