import React, { useState } from "react";

// Declaring a new state variable called 'text', setText is a function

export default function TextForm(props) {
  const [text, setText] = useState("");

  // setText("I have entered the text");
  const funUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  
  const funLoClick = () => {
    // console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")

  };
  const handleOnChange = (event) => {
    console.log('On change');
    setText(event.target.value);
  };

  const handleClearChange = () => {
    let newText = "";
    setText(newText);
  };
  const handleRemoveChange = () => {
    let newText = text;
    let s = /[  ]/g;
    setText(newText.replace(s,' '));
  };

  const handleCopyChange = () => {
    
    let newText = document.getElementById("myText");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myText"
          rows="8" value={text} onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'#060680':'white'
          ,color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary m-2 btn-sm" onClick={funUpClick} >
        Convert to UpperCase
      </button>
      <button className="btn btn-primary m-2 btn-sm" onClick={funLoClick} >
        Convert to LowerCase
      </button>
      <button className="btn btn-primary m-2 btn-sm" onClick={handleClearChange} >
        Clear Text
      </button>
      <button className="btn btn-primary m-2 btn-sm" onClick={handleCopyChange} >
        Copy Text
      </button>
      <button className="btn btn-primary m-2 btn-sm" onClick={handleRemoveChange} >
        Remove extra spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <h6>{text.split(" ").length} words, {text.length} characters</h6>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2 className="my-3">Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
