// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Obtención de elementos del DOM
const inputNombre = document.getElementById('amigo');
const btnAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const btnSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

let amigos = [];  // Array donde almacenamos los nombres

// Función para adicionar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre) {
        amigos.push(nombre);  // Agregar el nombre al array
        const li = document.createElement('li');  // Crear un nuevo elemento de lista
        li.textContent = nombre;  // Asignar el nombre al elemento de lista
        listaAmigos.appendChild(li);  // Agregar el nuevo elemento a la lista visible
        inputNombre.value = '';  // Limpiar el campo de texto
        inputNombre.focus();  // Volver a enfocar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) {
        const indexAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indexAleatorio];
        
        // Limpiar resultados anteriores
        resultado.innerHTML = '';

        // Mostrar el resultado en un nuevo elemento de lista
        const liResultado = document.createElement('li');
        liResultado.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
        resultado.appendChild(liResultado);
    } else {
        alert('La lista está vacía. Agrega amigos primero.');
    }
}
