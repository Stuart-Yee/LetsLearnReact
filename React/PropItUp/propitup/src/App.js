
import './App.css';
import PersonCard from './components/newComponents';

function App() {
  return (
    <div className="App">
      <PersonCard lName="Doe" fName="Jane" age={45} hColor="Black"/>
      <PersonCard lName="Smith" fName="John" age={88} hColor="Brown"/>
      <PersonCard lName="Fillmore" fName="Millard" age={50} hColor="Brown"/>
      <PersonCard lName="Smith" fName="Maria" age={62} hColor="Brown"/>
    </div>
  );
}

export default App;
