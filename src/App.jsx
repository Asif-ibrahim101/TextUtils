import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alerts from './Sub-components/Alerts';
// import { Routes, Route } from 'react-router-dom';
// import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  };

  const modeSet = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAlert("light mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#00425A';
      document.body.style.color = 'white';
      ShowAlert("dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} modeSet={modeSet} />
      <Alerts alert={alert} />
      <Textarea ShowAlert={ShowAlert} mode={mode} />
    </>

  )
}

export default App