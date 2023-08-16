
import React, {useState} from 'react'
export default function TextForm(props) {
    
    const [text, setText]=useState('');
    const clickOnChange=(event)=>{
        setText(event.target.value);
    }
    const changeUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Upper Case", "success");
    }
    const changeLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lower Case", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const changeRevClick=()=>{
        let revStr=text.split("").reverse().join("");
        setText(revStr);
        props.showAlert("Text Reversed", "success");
    }
    const Remove=()=>{
      let newT="";
      setText(newT);
      props.showAlert("Text Cleared", "success");
    }
    const copyText = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied to clipboard", "success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={clickOnChange} style={{background: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={changeUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={changeLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={changeRevClick}>Reverse the Text</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={Remove}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the above text box to preview it here."}</p>
    </div>
    </>
  )
}
