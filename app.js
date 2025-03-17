const nombres = []; 

function agregarNombre() {
    const input = document.getElementById('amigoDeUsuario');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido');
        return; 
    }

    nombres.push(nombre);
    actualizarLista();    
    input.value = '';    
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // 

    nombres.forEach((nombre) => { 
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nombres.length === 0) {
        alert('Agregue al menos un nombre antes de sortear.');
        return;
    }
    const ganador = nombres[Math.floor(Math.random() * nombres.length)];
    document.getElementById('resultado').textContent = 'Ganador: ' + ganador;
}
    function reiniciar() {
       nombres.length = 0; // Vaciar el array
       actualizarLista(); // Limpiar la lista en pantalla
       document.getElementById('Reinicio').textContent = ''; // Limpiar el resultado
}
