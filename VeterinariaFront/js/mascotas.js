const listarMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const botonNuevo = document.getElementById('botonNuevo');

let mascotas = [
    {
        tipo: "Gato",
        nombre: "manchas",
        dueno: "Esteban"
    },
    {
        tipo: "Perro",
        nombre: "Cacaroto",
        dueno: "Julián"
    }
];

function listaMascotas() {
    const htmlMascotas = mascotas.map((mascota, index) => `
    <tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
</tr>`).join("");
    listarMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => {
        botonEditar.onclick = editar(index);
    })
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => {
        botonEliminar.onclick = eliminar(index);
    })

}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    }
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            mascotas[indice.value] = datos;
            resetModal();
            break;
        default:
            mascotas.push(datos);
            break;
    }

    listaMascotas();
}

function editar(index) {

    return function cuandoHagoClick() {
        btnGuardar.innerText = 'Editar';
        const mascota = mascotas[index];
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        tipo.value = mascota.tipo;
        indice.value = index;
    }
}
function resetModal() {
    nombre.value = '';
    dueno.value = '';
    tipo.value = '';
    indice.value = '';
    btnGuardar.innerHTML = 'Crear';
}
function sacoEditar() {
    btnGuardar.innerHTML = 'Crear';
}

function eliminar(index) {
    return function clickEnEliminar() {
        mascotas = mascotas.filter((m, indiceMascota) => indiceMascota !== index);
        listaMascotas();
    }

}

listaMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
botonNuevo.onclick = sacoEditar;