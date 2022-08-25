import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from "react-router";

const Welcome = (props) => {
  return <h1>Welcome</h1>
}

const Message = (props) => {
  const {message} = useParams();
  let text = "";
  isNaN(message) ? text = `The Word is ${message}` :
    text = `The number is ${message}`;
  return <h1>{text}</h1>
}

const Box = (props) => {

  const {message} = useParams();
  const {color} = useParams();
  const {box} = useParams();

  return (
    <div style={{color: color, background: box}}>
      <h1>The word is {message}</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/:message" element={<Message />}/>
        <Route path="/:message/:color/:box" element={<Box />}/>
      </Routes>

    </div>
  );
}

export default App;
