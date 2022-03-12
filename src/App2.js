import { getAllCharacteres } from './services/dataApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [character, setCharacter] = useState([])

  useEffect(() => {
    getAllCharacteres()
    .then(data => setCharacter(data))
  }, [])

  return (
    
      <div>
        {character.map(item => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    
  );
}

export default App;
