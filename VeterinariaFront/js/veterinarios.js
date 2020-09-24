const listaVeterinarios = document.getElementById('lista-veterinarios');
const apellido = document.getElementById('apellido');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const botonNuevo = document.getElementById('botonNuevo');
const pais = document.getElementById('pais');

let veterinarios = [
    {
        nombre: "Matias",
        apellido: "manchas",
        pais: "Perú",
        identificacion: "456258"
    },
    {
        nombre: "Saul",
        apellido: "Cacaroto",
        pais: "Perú",
        identificacion: "asd1321"
    }
];

function listarVeterinarios() {
    const htmlVeterinarios = veterinarios.map((veterinario, index) => `
    <tr>
    <th scope="row">${index}</th>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>${veterinario.pais}</td>
    <td>${veterinario.identificacion}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
</tr>`).join("");
listaVeterinarios.innerHTML = htmlVeterinarios;
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
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value,
        identificacion: identificacion.value
    }
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            veterinarios[indice.value] = datos;
            resetModal();
            break;
        default:
            veterinarios.push(datos);
            break;
    }

    listarVeterinarios();
}

function editar(index) {

    return function cuandoHagoClick() {
        btnGuardar.innerText = 'Editar';
        const veterinario = veterinarios[index];
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        pais.value = veterinario.pais;
        identificacion.value = veterinario.identificacion;
        indice.value = index;
    }
}
function resetModal() {
    nombre.value = '';
    apellido.value = '';
    pais.value = '';
    identificacion.value = '';
    indice.value = '';
    btnGuardar.innerHTML = 'Crear';
}
function sacoEditar() {
    btnGuardar.innerHTML = 'Crear';
}

function eliminar(index) {
    return function clickEnEliminar() {
        veterinarios = veterinarios.filter((m, indiceVeterinario) => indiceVeterinario !== index);
        listarVeterinarios();
    }
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
botonNuevo.onclick = sacoEditar;