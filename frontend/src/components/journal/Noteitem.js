import React, { useState,useContext } from 'react'
import Notecontext from './context/Notecontext';
const Noteitem = (props) => {
 
    const {note,updatenote}=props;
    const {deletenote}=useContext(Notecontext);
  return (
  <>
  <div className=" mx-0 ">
  <div className="card " >
  <div className={`card-body `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}}>
    <h4 className={` card-title text-${props.Mode==='light'?'dark':'light'}`}>{note.title}</h4>
    <p className={` card-text text-${props.Mode==='light'?'dark':'light'}`}>{note.description}</p>
    <small className={`text-${props.Mode==='light'?'success':'info'}`}>{note.tag}</small>
    <br />
    <div className="d-flex mx-2">
    <i className={`fa-solid fa-pen-to-square mx-2 my-2 text-${props.Mode==='light'?'success':'info'}`} onClick={()=>updatenote(note)} style={{color: "#231b1b"}} id="crud-bt"></i>
    <i className={`fa-solid fa-trash mx-2 my-2 text-${props.Mode==='light'?'success':'info'}`} onClick={()=>{deletenote(note._id)}} id="crud-bt"></i>
    </div>
  </div>
</div>
</div>

  </>
  )
}

export default Noteitem
