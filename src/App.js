import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#03052adb';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div>
        <Navbar title="Text Utils" aboutText="About Text Utils" toggleMode={toggleMode} mode={mode} />
        <div className="container my-3">
          <TextForm heading="Enter the text below" mode={mode}/>
        </div>
        {/* <About /> */}
    </div>
  );
}

export default App;
