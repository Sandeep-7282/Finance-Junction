import React,{useState} from 'react'

export default function Text(props) {
    const [textinside,Text]=useState("");
  const Up=()=>{
      const newtext=textinside.toUpperCase();
      Text(newtext);
    }
    const change=(e)=>{
        Text(e.target.value);
    }
    const low=()=>{
        const newtext=textinside.toLowerCase();
        Text(newtext);
      }
  const clear=()=>{
    Text("")
  }
  const spaces=()=>{
    Text(textinside.replace(/\s+/g, ' ').trim());
  }
  const copy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(text.value);

  }
  return (
    <>
    <div className={`my-2 container text-${props.Mode==='light'?'dark':'light'}`}>
    <h1 className={`heading text-${props.Mode==='light'?'dark':'light'}`}>Enter Your Text Below</h1>
<div className="mb-3 ">
  <textarea className="form-control " value={textinside}   onChange={change} id="myBox" rows="5" placeholder='Enter Your Text Here' style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#c5c5c7'}}></textarea>
  <button className={`btn my-2 mx-5 btn-${props.Mode==='light'?'success':'info'}`} onClick={Up}>Upper Case</button>
  <button className={`btn my-2 mx-5 btn-${props.Mode==='light'?'success':'info'}`}  onClick={low}>Lower Case</button>
  <button className={`btn my-2 mx-5 btn-${props.Mode==='light'?'success':'info'}`}  onClick={clear}>Clear Text</button>
  <button className={`btn my-2 mx-5 btn-${props.Mode==='light'?'success':'info'}`}  onClick={spaces}>Clear Extra Spaces</button>
  <button className={`btn my-2 mx-5 btn-${props.Mode==='light'?'success':'info'}`}  onClick={copy}>Copy Text</button>
</div>
    </div>
    <div className={`container text-${props.Mode==='light'?'dark':'light'}`}>
        <h2>Text Summary</h2>
        <p>Total Words={textinside.split(" ").length-1}</p>
        <p>Total Characters={textinside.length}</p>
        <p>Total time taken to Read={0.066667*(textinside.split(" ").length-1)} Minutes (or) {4*(textinside.split(" ").length-1)} Seconds</p>
    </div>
    <div className={`container text-${props.Mode==='light'?'dark':'light'}`}>
        <h3>Preview</h3>
        <p>{textinside}</p>
    </div>
    </>
  )
}
