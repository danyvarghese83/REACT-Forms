import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm';
import Display from './Components/Display';

function App(){
  const [state, setState] = useState({
    userName:"",
    email: "",
    password:"",
    cpass:""
  });
  return(
    <div className="App">
      <UserForm input={state} setInputs={setState} />
      <Display data={state}/>
    </div>
  )
}

export default App;
