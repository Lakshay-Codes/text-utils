import React,{useState} from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [myStyle,setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [btnText,setBtnText] = useState("Enable light mode");
  const toggleMode=()=>{
    if(btnText==='Enable dark mode'){
      setBtnText('Enable light mode');
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
    }else{
      setBtnText('Enable dark mode');
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  }
  return (
    <div style={myStyle}>
        <Navbar title="Text Utils" aboutText="About Text Utils" onclick={toggleMode}  btntext={btnText} />
        <div className="container my-3">
          <TextForm heading="Enter the text below" />
        </div>
        {/* <About /> */}
    </div>
  );
}

export default App;
