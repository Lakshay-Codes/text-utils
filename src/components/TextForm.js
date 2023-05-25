import React,{useState} from 'react'
import PropTypes from 'prop-types'
function Textform(props) {
    const [text,setText] =useState("Enter Text Here");
    const handleUpClick=(value)=>{
        console.log("Uppercase was clicked "+text);
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
    </>
  )
}

export default Textform

Textform.prototype={
    heading: PropTypes.string
}