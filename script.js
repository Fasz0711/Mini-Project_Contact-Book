const nombre = document.getElementById('nombre');
const telefono = document.getElementById('numero');
const boton = document.getElementById('boton');

const listaUsers= document.getElementById('lista');
const buscar = document.getElementById('buscar');
const users= [];

boton.addEventListener('click', agregar );
buscar.addEventListener('input', buscarUsuario);

function agregar(e){
    e.preventDefault();
    const nombreValor = nombre.value;
    const telefonoValor = telefono.value;

    const usuario = {
        nombre: nombreValor,
        telefono: telefonoValor
    }

    users.push(usuario);
    console.log(users);

    nombre.value = '';
    telefono.value = '';

    mostrarLista();

}

function mostrarLista(){
    listaUsers.innerHTML = ''; // Limpiar la lista antes de mostrarla
    users.forEach((usuario, index) => {
        const user = document.createElement('li');
        user.innerHTML = `<p> • ${usuario.nombre} - ${usuario.telefono} </p>
                          <button class="button" onclick="borrarUsuario(${index});"> Eliminar </button>`;
        listaUsers.appendChild(user);
    });
}

function borrarUsuario(index){
    users.splice(index, 1); // Eliminar el usuario del array
    mostrarLista(); // Refrescar la lista
}

function buscarUsuario(){
    const texto = buscar.value.toLowerCase(); // Convertir a minúsculas para que no sea sensible a mayúsculas
    const filtrado = users.filter(usuario => {
        // Filtrar los usuarios que contengan el texto ingresado
        return usuario.nombre.toLowerCase().includes(texto) || usuario.telefono.includes(texto);
    });
    listaUsers.innerHTML = ''; // Limpiar la lista antes de mostrarla
    // Crear un li por cada elemento filtrado y agregarlo a la lista recién limpiada
    filtrado.forEach((usuario, index) => {
        const user = document.createElement('li');
        user.innerHTML = `<p> • ${usuario.nombre} - ${usuario.telefono} </p>
                          <button class="button" onclick="borrarUsuario(${index});"> Eliminar </button>`;
        listaUsers.appendChild(user);
    });
}