import Form from './components/form';
import Boxes from './components/boxes';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([]) //make an array of colors
  
  // add new colors to this array
  const addColor = (color) => {
    console.log("Calling addColor");
    setColors([...colors, color]);
    console.log("after push")
    console.log(colors);
  } 
  return (
    <div className="App">
      <Form colorAdder={addColor}/>      
      <Boxes colors={colors}/>

    </div>
  );
}

export default App;
