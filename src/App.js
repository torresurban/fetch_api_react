import { useEffect, useState } from "react";
import Character from "./components/Character";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";



function App() {

  const [character, setCharacter] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = 'https://rickandmortyapi.com/api/character'

  const fetchCharacter = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setCharacter(data.results)
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  };

  const onPrevious = () => {
      fetchCharacter(info.prev)
  }

  const onNext = () => {
      fetchCharacter(info.next)
  }

  useEffect(() => {
    fetchCharacter(initialUrl)
  }, [])

  return (
    <>
    <Navbar brand={'Rick & Morty App '}/>
    <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Character character={character}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
    </>
      
    
  );
}

export default App;
