import React,{useState} from 'react'
import PropTypes from 'prop-types'
function Textform(props) {
    const [text,setText] =useState("");
    const handleUpClick=(value)=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case!","success");
    }
    const handleLowClick=(value)=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case!","success");
    }
    const handleClearClick=(value)=>{
        setText("");
        props.showAlert("Text cleared","success");
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handleCopyClick=()=>{
        var text =document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpacesClick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    return (
    <>
        <div className="mb-3 my-5">
        <label htmlFor="myBox" className="form-label" style={{color:props.mode==='dark'? 'white' : 'black'}}>{props.heading}</label>
        <textarea  className="form-control my-2 my-1" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'black' : 'white',color:props.mode==='dark'? 'white' : 'black'}} rows="8" />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        <div className={`container my-3 text-${props.mode==='light'? 'dark' : 'light'}`}  >
            <h4 >Your Text Summary</h4>
            <p>Your text contains <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length===0? "Enter text in the above text area to see the preview" : text}</p>
        </div>
    </>
  )
}

export default Textform

Textform.prototype={
    heading: PropTypes.string
}