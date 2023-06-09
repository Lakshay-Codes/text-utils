import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#03052adb';
      // document.title = "Text Utils-Dark Mode" 
      showAlert("Dark mode has been enabled","success");
      // setInterval(() => {
      //   document.title="TextUtils is amazing";
      // }, 1500);
      // setInterval(() => {
      //   document.title="Bookmark TextUtils now!";
      // }, 2000);
    }else{
      setMode('light');
      document.title = "Text Utils"
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <Router>
    <div>
        <Navbar title="Text Utils" aboutText="About Text Utils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<div className="container my-3"><TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/></div>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
