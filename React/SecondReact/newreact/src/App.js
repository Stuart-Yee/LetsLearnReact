import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './components/new_components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewComponent myText={"balderdash!"}/>
        <NewComponent myText={"Franklin loves applesauce"}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React like it's hot
        </a>
      </header>
    </div>
  );
}

export default App;
