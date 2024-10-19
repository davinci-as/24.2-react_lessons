import './App.css';
import {
  useState
} from 'react';
import PetsViewer from './components/PetsViewer';

const URL = "http://localhost:3000/data/pets.json"
function App() {
  const [pets, setPets] = useState();

  /*fetch(URL)
    .then(response => response.json())
    .then(response => response.response)
    .then(response => {
      console.log("response", response);
      return response;
    })
    .then(pets => setPets(pets))*/

  return (
    <div className="App">
      <header className="App-header">
        <PetsViewer pets={pets} />
      </header>
    </div>
  );
}

export default App;
