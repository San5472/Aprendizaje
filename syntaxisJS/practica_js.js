const textoInput = document.querySelector('.input')
const boton = document.querySelector('.button')
const list = document.createElement('lista-añadir')

boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    const nuevaLista = document.createElement('li');
    nuevaLista.textContent = textoInput.value;

    list.appendChild(nuevaLista)
    textoInput = "";
});

