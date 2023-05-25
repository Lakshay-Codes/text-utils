import React,{useState} from 'react'
import PropTypes from 'prop-types'
function Textform(props) {
    const [text,setText] =useState("");
    const handleUpClick=(value)=>{
        setText(text.toUpperCase());
    }
    const handleLowClick=(value)=>{
        setText(text.toLowerCase());
    }
    const handleClearClick=(value)=>{
        setText("");
    }
    const handleOnChange=(e)=>{
       setText(e.target.value);
    }

    return (
    <>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <div className="container my-3">
            <h4>Your Text Summary</h4>
            <p>Your text contains <b>{text.length===0? 0 : text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p>{(text.length===0? 0 : text.split(" ").length)*0.008} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default Textform

Textform.prototype={
    heading: PropTypes.string
}