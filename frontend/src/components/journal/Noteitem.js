import React, { useState,useContext } from 'react'
import Notecontext from './context/Notecontext';
import jwt_decode from 'jwt-decode'
const Noteitem = (props) => {
      const jwt_data=jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzM2IyZWE1NTBkZDQ1MDlkM2RlMWE0In0sImlhdCI6MTY5Nzg4Njk1NX0.AIj0sJufIYw7QZvgqIruoLSiLdt11a44VKo_ycSf0do')
       const id_data=jwt_data.user.id
      const {note,updatenote}=props;
    const {deletenote}=useContext(Notecontext);
  return (
  <>
  <div className=" mx-0">
  <div className="card" style={{maxWidth:'30vw',minHeight:'20vh',border:'none'}}>
  <div className={`card-body`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',boxShadow:props.Mode==='dark'?'3px 3px 3px rgba(255, 255, 255,0.8)':'3px 3px 3px rgba(0, 0, 0,0.7)',borderRadius:'5px'}}>
    <h4 className={` card-title`} style={{color:props.Mode==='dark'?'#088395':'#025933'}}>{note.title}</h4>
    <p className={` card-text text-${props.Mode==='light'?'dark':'light'}`}>{note.description}</p>
    <small className={`text-${props.Mode==='light'?'success':'info'}`}>{note.tag}</small>
    <br />
    {!localStorage.getItem('token')||jwt_decode(localStorage.getItem('token')).user.id===id_data?
   <></>: <div className="d-flex mx-2">
    <i className={`fa-solid fa-pen-to-square mx-2 my-2 text-${props.Mode==='light'?'success':'info'}`} onClick={()=>updatenote(note)} style={{color: "#231b1b"}} id="crud-bt"></i>
    <i className={`fa-solid fa-trash mx-2 my-2 text-${props.Mode==='light'?'success':'info'}`} onClick={()=>{deletenote(note._id)}} id="crud-bt"></i>
    </div>
    }
  </div>
</div>
</div>
  </>
  )
}
export default Noteitem
