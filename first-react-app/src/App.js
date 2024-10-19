import './App.css';
import {
  useEffect,
  useState
} from 'react';
import PetsViewer from './components/PetsViewer';

const URL = "http://localhost:3000/data/pets.json"
function App() {
  const [user, setUser] = useState(false)
  const [pets, setPets] = useState([]);

  useEffect(() => {
    console.log("SE DISPARO USEEFFECT")
    fetch(URL)
    .then(response => response.json())
    .then(response => response.response)
    .then(pets => {
      setUser(true)
      setPets(pets)
    });
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <PetsViewer pets={pets} />
      </header>
    </div>
  );
}

export default App;
