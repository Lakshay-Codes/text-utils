import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <div>
        <Navbar title="Text Utils" aboutText="About Text Utils" toggleMode={toggleMode} mode={mode} />
        <div className="container my-3">
          <TextForm heading="Enter the text below" />
        </div>
        {/* <About /> */}
    </div>
  );
}

export default App;
