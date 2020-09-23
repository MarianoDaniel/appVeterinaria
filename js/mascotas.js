const listarMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const formu = document.getElementById('form');
console.log(formu);
let mascotas = [
    {
        tipo: "Gato",
        nombre: "manchas",
        dueno: "Esteban"
    }
];

function listaMascotas() {
    const htmlMascotas = mascotas.map((mascota, indice) => `
    <tr>
    <th scope="row">${indice}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
</tr>`).join("");
    listarMascotas.innerHTML = htmlMascotas;

}

function enviarDatos(e) {
   
    console.log('evento', e);
}


listaMascotas();
formu.onsubmit = enviarDatos;