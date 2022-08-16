
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // eslint-disable-next-line
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const[checks,setChecks] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light' ){
      setMode("dark");
      document.body.style.backgroundColor = '#16003B';
      showAlert("The dark mode has been enabled" , "success");
      document.title = ('TextUtils - Dark mode');
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("The light mode has been enabled ", "success")
      document.title = ('TextUtils - Light mode');
    }
  } 

  const invokeGreenChecks = ()=> {
    setChecks("green");
    document.body.style.backgroundColor = '#3CCF4E'
    showAlert("The green mode has been enabled ", "success")
  }

  const invokeRedChecks = ()=> {
    setChecks("red");
    document.body.style.backgroundColor = '#EB1D36'
    showAlert("The red mode has been enabled ", "success")
  }

  const invokeGreyChecks = ()=> {
    setChecks("grey");
    document.body.style.backgroundColor = '#576F72'
    showAlert("The grey mode has been enabled ", "success")
  }

  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} checks={checks} toggleMode={toggleMode} invokeGreenChecks={invokeGreenChecks} invokeRedChecks={invokeRedChecks} invokeGreyChecks={invokeGreyChecks}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
              <Route exact path="/about" >
                <About />
              </Route> */}
              
              {/* <Route exact path="/"> */}
                <TextBox showAlert={showAlert} heading = "Enter your text to analayze below " mode={mode} checks={checks}/>
              {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    
    </>
  );
  
}

export default App;

