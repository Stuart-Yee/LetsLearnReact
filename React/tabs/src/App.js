import './App.css';
import {useState} from 'react';
import Tabs from './components/tabs';
import Contents from './components/contents';

function App() {

  const [tabs, setTabs] = useState([
    ["Tabatha", "Spooky cute"], 
    ["Jane", "Fun Loving"], 
    ["Geraldo", "Serious"]
  ]);

  const [content, setContent] = useState('filler diller');

  const update = (e, val) => setContent(val);

  return (
    <div className="App">
      <Tabs titles={tabs} clickHandler={update}/>
      <Contents text={content}/>
    </div>
  );
}

export default App;
