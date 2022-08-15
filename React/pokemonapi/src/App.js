import './App.css';
import Button from './components/button';
import Pokemon from './components/pokemon';
import React, {useState} from 'react';

function App() {

  const [getPokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <Button label={"Get Pokemon"} handler={setPokemon}/>
      <Pokemon pokemon={getPokemon}/>

    </div>
  );
}

export default App;
