const mascotas = [
    {nombre: "perro", imagen: "", habilitado: true },
    {nombre: "gato", imagen: "", habilitado: true },
    {nombre: "pato", imagen: "", habilitado: false },
    {nombre: "puma", imagen: "", habilitado: true}
];

function Mascota (nombre){
    const contenedor = document.getElementById("contenedor");
    const paragraph = document.createElement('p');
    paragraph.textContent = nombre;
    contenedor.appendChild(paragraph)
}

mascotas
    .filter(mascota => mascota.habilitado)
    .map(mascota => mascota.nombre)
    .map(mascota => Mascota(mascota))