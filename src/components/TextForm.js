import React ,{ useState } from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");

  const handleupclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    
  };

  const handlelowclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  };

  const handlechange=(event)=>{
    setText(event.target.value);
  };

  const handleclearclick=()=>{
    setText("");
  };

  const handleremoveextraclick=()=>{
    setText((text.trim().split(/\s+/)).join(" "));
  };
  
  const handlespeakclick=()=>{
    const utterance=new SpeechSynthesisUtterance(text);
    const voices=speechSynthesis.getVoices();
    utterance.voice=voices[2];
    speechSynthesis.speak(utterance);
  };

  const handlecopy=()=>{
    const textdata=document.getElementById("floatingTextarea");
    textdata.select();
    navigator.clipboard.writeText(textdata.value);
  };


  return (
    <>
    <div style={props.style}>
        <div className="textarea" >
          <h3>Enter anything to analyse:</h3><br/>
            <textarea labelfor="floatingTextarea" style={{backgroundColor:props.style.backgroundColor==="black"?"grey":"white"}}placeholder="Enter your text here" onChange={handlechange} value={text} id="floatingTextarea" rows='8' cols="150"></textarea>
        </div>
        <button type="button" className="btn btn-info mx-2" onClick={()=>{handleupclick();props.createalert("Text coverted to uppercase!!")}}>To upperCase</button>
        <button type="button" className="btn btn-info mx-2" onClick={()=>{handlelowclick();props.createalert("Text coverted to lowercase!!")}}>To lowerCase</button>
        <button type="button" className="btn btn-info mx-2" onClick={()=>{handleclearclick();props.createalert("Text cleared!!")}}>clear text</button>
        <button type="button" className="btn btn-info mx-2" onClick={()=>{handleremoveextraclick();props.createalert("Removed extra spaces!!")}}>Remove extra spaces</button>
        <button type="button" className="btn btn-info mx-2" onClick={()=>{handlecopy();props.createalert("Text copied to clipboard!!")}}>Copy text</button>
        <button type="button" className="btn btn-info mx-2" onClick={handlespeakclick} style={{height:"40px" ,width:"40px"}}>
        <img src="audioimage.jpg" alt="" style={{height:"100%",width:"100%",objectFit:"contain"}}/></button>
    </div>
    <div className="my-2">
      <p>WordCount:{text.trim().split(" ").length}</p>
      <p>CharacterCount:{text.length}</p>
      <p>Time taken to read(in min):{text.length*0.008}</p>
      <h4><u>Preview</u></h4>
      <p>{text}</p>
      <h4>Meaning:</h4>
      <p>{props.searchWord} : {props.Meaning}</p>
    </div>
    </>
  )
}
