import Notecontext from './context/Notecontext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import { useContext,useRef,useState } from 'react';
import React from 'react'

const Notes = ({Mode}) => {
  const {notes,editnote}=useContext(Notecontext);
    const ref=useRef(null);
    const refclose=useRef(null)
    const [note,setNote]=useState({title:"",description:"",tag:"",error:''})
    const updatenote=(currentnote)=>{
        ref.current.click();
        setNote(currentnote)
    }
    const save=(e)=>{
      e.preventDefault();
      editnote(note._id,note.title,note.description,note.tag)
      if(note.title.length>2&&note.description.length>2){
        document.getElementById('uerror').innerText='Changes Saved Successfully'
        setTimeout(()=>{
          refclose.current.click();
          {document.getElementById('uerror').innerText=''}
           },500)}
      else{document.getElementById('uerror').innerText='entered title (or) description is less than 3 characters'
          setTimeout(()=>{
         {document.getElementById('uerror').innerText=''}
          },2000)}
  }
    const echange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="d-flex ">
      <div className="bux-1 " style={{width:'40%',height:'100vh'}}>
    <Addnote Mode={Mode}/>
<button type="button" className="btn d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<i className="fa-solid fa-pen-to-square mx-2 my-2" style={{color: "#231b1b"}}></i>
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Your Notes</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
    <div className="mb-3">
   <h4>Title</h4>
  <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Your Title" onChange={echange} minLength={3}/>
</div>
<div className="my-2 mb-3">
   <h3>Description</h3>
  <textarea className="form-control my-1" id="description" value={note.description} name="description" rows="3" onChange={echange} minLength={5}></textarea>
  <input type="text" className="form-control" id="tag" name="tag" value={note.tag} placeholder="tag" onChange={echange}/>
</div>
<p id='uerror'></p>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={save}>Update</button>
      </div>
    </div>
  </div>
</div></div>
<div className="my-3 mx-3 container" >
                <h2  className={` my-4 text-${Mode==='light'?'dark':'info'} text-center`} style={{fontSize:'2.5vw'}}>Your Notes</h2>
               <div className="row mx-5 "> {notes.map((note) => {
    return <div className="col-lg-6 mb-4"><Noteitem key={note._id} Mode={Mode} updatenote={updatenote} note={note} /></div>
})}</div>
            </div>
            </div>
    </>
  )
}
export default Notes
