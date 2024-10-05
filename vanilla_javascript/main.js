const mascotas = [
    {nombre: "perro", imagen: "" },
    {nombre: "gato", imagen: "" },
    {nombre: "pato", imagen: "" },
    {nombre: "puma", imagen: ""}
];

function Mascota (nombre){
    const contenedor = document.getElementById("contenedor");
    const paragraph = document.createElement('p');
    paragraph.textContent = nombre;
    contenedor.appendChild(paragraph)
}

mascotas
    .map(mascota => mascota.nombre)
    .map(mascota => Mascota(mascota));