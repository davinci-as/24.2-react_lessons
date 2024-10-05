import logo from './logo.svg';
import './App.css';

function App() {
  const mascotas = [
    { 
      nombre: "pato", 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlP43bXvIFTB5XmGqCJq9keyTQAmeZ0XZnTQ&s", 
      habilitado: true },
    { 
      nombre: "gato", 
      imagen: "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1900&h=1400", 
      habilitado: true },
    { 
      nombre: "perro", 
      imagen: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp", 
      habilitado: false },
    { 
      nombre: "puma", 
      imagen: "https://media.istockphoto.com/id/682954094/es/foto/puma.jpg?s=612x612&w=0&k=20&c=QhAwTbu_sVPR4gnI2yLwpmjV6pcXI0zxiLI6cbAp7lo=", 
      habilitado: true }
  ];

  const tituloMascota = mascota => <div>
      <p>{mascota.nombre}</p>
      <img src={mascota.imagen} />
    </div>

  return (
    <div className="App">
      <header className="App-header">
        {
          mascotas
            .filter(mascota => mascota.habilitado)
            .map(tituloMascota)
        }
      </header>
    </div>
  );
}

export default App;
