import {useState} from 'react';
import './App.css';
import Button from './components/button';
import Pokemon from './components/pokemon';
import Limit from './components/limit';

function App() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon";

  const [getPokemon, setPokemon] = useState([]);
  const [fetchLimit, setFetchLimit] = useState(10);

  console.log(getPokemon);

  return (
    <div className="App">
      <Limit update={setFetchLimit} limit={fetchLimit}/>
      <Button label={"Get Pokemon"} url={baseURL} limit={fetchLimit} handler={setPokemon}/>
      <Pokemon pokemon={getPokemon}/>
    </div>
  );
}

export default App;
