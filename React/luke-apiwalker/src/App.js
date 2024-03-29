import {Routes, Route} from 'react-router-dom'
import './App.css';
import Page from './components/page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/:type/:id" element={<Page/>}/>
        <Route path="/bad" element={<Page badRequest={true}/>}/>
      </Routes>

    </div>
  );
}

export default App;
