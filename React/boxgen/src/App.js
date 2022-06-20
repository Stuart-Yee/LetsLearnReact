import Form from './components/form';
import Boxes from './components/boxes';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([])
  
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
