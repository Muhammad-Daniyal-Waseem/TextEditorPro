import React, { useState } from 'react'

export default function Section() {
    const synth = window.speechSynthesis;



    const speak=()=>{
        
        if (text.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        }
    }


const changer=(e)=>{

setText2(e.target.value);
}
const upper=()=>{
    setText2(text.toUpperCase());
}
const lower=()=>{
    setText2(text.toLowerCase());
}
const clear=()=>{
    setText2('');
}
const Copy=()=>{
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied successfully:', text);
    })
    .catch(err => {
        console.error('Error copying text:', err);
        alert('Failed to copy text.');
    });
    
}


const [text,setText2]=useState("");

let text_length=()=>{
if(text!="")
{
    return text.split(" ").filter((element)=>{return element.length!=0;}).length;
}
else{
    return 0;
}
}

  return (
    <>
    
    <div className='section_container'>
      <input type='text' value={text} onChange={changer} className="box">

      </input>
      <div className="box2">
      <button className='btn1'  onClick={lower}>LowerCase</button>
      <button className='btn1'  onClick={upper}>UpperCase</button>
      <button className='btn1'  onClick={clear}>Clear</button>
      <button className='btn1'  onClick={Copy}>Copy Text</button>
      <button className='btn1'  onClick={speak}>Listen</button>
      <span className='btn2' >Characters: {text.length} </span>
      <span className='btn2' >Words: {text_length()} </span>

      </div>
    </div>
    </>
  )
}
