import React,{useState} from 'react'
import PropTypes from 'prop-types'
function Textform(props) {
    const [text,setText] =useState("Enter Text Here");
    const handleUpClick=(value)=>{
        setText(text.toUpperCase());
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
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
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