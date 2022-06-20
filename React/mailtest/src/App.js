import React, {useState} from 'react';
import MessageDisplay from './Components/MessageDisplay';
import MessageForm from './Components/MessageForm';
import './App.css';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg([...currentMsg, newMessage]);
  }
    
  return (
      <div>
          <MessageForm onNewMessage={ youveGotMail }/>
          <MessageDisplay message={ currentMsg } />
      </div>
  );
}

export default App;
