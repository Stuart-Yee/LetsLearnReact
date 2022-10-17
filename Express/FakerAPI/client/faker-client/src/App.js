import logo from './logo.svg';
import './App.css';
import {createContext} from 'react'
import BaseDomainContext from './context/baseDomain';
import Companies from './components/companies';
import CreateUser from './components/createUser';
import Users from './components/users';
import CreateCompany from './components/createCompany';

function App() {
  return (
    <div className="App">
      <BaseDomainContext.Provider value="http://localhost:8000/api">
        <h1 className='title'>Faker API Content!</h1>
        <div className='main-content'>
          <div className='col'>
            <CreateUser/>
            <Users/>
          </div>
          <div className='col'>
            <CreateCompany/>
            <Companies/>
          </div>
          
        </div>


      </BaseDomainContext.Provider>
    </div>
  );
}

export default App;
