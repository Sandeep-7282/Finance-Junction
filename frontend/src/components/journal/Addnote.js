import React, { useContext, useState,useEffect } from 'react'
import Notecontext from './context/Notecontext';
const Addnote = ({Mode}) => {
    const context=useContext(Notecontext);
    const {Addnote,getnotes}=context;
    const [disable,setdisable]=useState(false)
     const [note,setnotes]=useState({title:"",description:"",tag:"",error:''})
     useEffect(()=>{
      if(!localStorage.getItem('token')){
                 setdisable(true)
      }
      getnotes();
    },[])
    const change=(e)=>{
      {localStorage.getItem('token')?
         setnotes({...note,[e.target.name]:e.target.value}):document.getElementById('error').innerText='Login to add your notes'
         }
    }
    const addnote=(e)=>{
        e.preventDefault();
        if(note.title.length>2&&note.description.length>2){
        Addnote(note.title,note.description,note.tag)
      }
        else{document.getElementById('error').innerText='Entered note details are less than 3 characters'
            setTimeout(()=>{
           {document.getElementById('error').innerText=''}
            },2000)}
    }
  return (
    <>
     <div div className='mx-5 my-5' style={{width:'40vw'}}>
    <div className="mb-3">
   <h2 className={`text-${Mode==='light'?'dark':'info'}`}style={{fontSize:'2.5vw'}}>Title</h2>
  <input type="text " disabled={disable} className={`form-control text-${Mode==='light'?'dark':'light'} `} style={{backgroundColor:Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="title" name="title" placeholder="Your Title" onChange={change} minLength={3}/>
</div>
<div className="my-2 mb-3">
   <h2 className={` text-${Mode==='light'?'dark':'info'}`}style={{fontSize:'2.5vw'}}>Description</h2>
  <textarea  disabled={disable}  className={`form-control my-1 text-${Mode==='light'?'dark':'light'} `} style={{backgroundColor:Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="description" name="description" rows="3" onChange={change} minLength={5}></textarea>
  <input disabled={disable} type="text" className={`form-control my-3 text-${Mode==='light'?'dark':'light'}`}   style={{backgroundColor:Mode==='light'?'#aab8b6':'#383838',width:'40vw',border:'none'}} id="tag" name="tag" placeholder="tag" onChange={change}/>
</div>
<div className="d-flex flex-row align-items-center">
<button type="button" disabled={disable} className={`btn mx-3 my-1 btn-${Mode==='light'?'success':'info'}`}  onClick={addnote}>Save</button>
<p id="error" className={`text-${Mode==='light'?'danger':'danger'}`}></p>
</div>
</div>
    </>
  )
}

export default Addnote
