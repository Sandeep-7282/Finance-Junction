import Notes from '../Notes';
import Notecontext from './Notecontext';
import React, { useState } from 'react'

const Notestate=(props)=> {
const[notes,setnotes]=useState([]);
const host="http://localhost:4100/";
//const host="https://finance-junction-xmer.onrender.com"

   const getnotes =async()=>{
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET", 
      mode: "cors",
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "auth-token":localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZjcwMDRkYzVhYTIwN2U2MWQ5OGYwIn0sImlhdCI6MTY5MDYyNTkxN30.XLzDOSEsnn_BJn_wrIYUU_SZEga-tmkoQnRZeauTf2o',
        "Content-Type": "application/json"
      }
    });
    const json=await response.json();
      setnotes(json);
      console.log(json)
   }
     
     const Addnote=async(title,description,tag)=>{
      const response = await fetch(`${host}api/notes/addnote`, {
        method: "POST", 
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
           "auth-token":localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZjcwMDRkYzVhYTIwN2U2MWQ5OGYwIn0sImlhdCI6MTY5MDYyNTkxN30.XLzDOSEsnn_BJn_wrIYUU_SZEga-tmkoQnRZeauTf2o'
        }, body: JSON.stringify({title,description,tag})
      });
     const json=await response.json();
        setnotes(notes.concat(json)) 
       }
       const deletenote=async(id)=>{
        const response = await fetch(`${host}api/notes/delete/${id}`, {
          method: "DELETE", 
          mode: "cors",
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
             "auth-token":localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZjcwMDRkYzVhYTIwN2U2MWQ5OGYwIn0sImlhdCI6MTY5MDYyNTkxN30.XLzDOSEsnn_BJn_wrIYUU_SZEga-tmkoQnRZeauTf2o'
            }
        });
       console.log(response)
     const newnotes=notes.filter((note)=>{
      return note._id!==id
     })
     setnotes(newnotes)
       }
      
       const editnote=async(id,title,description,tag)=>{
        const response=await fetch(`${host}api/notes/update/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZjcwMDRkYzVhYTIwN2U2MWQ5OGYwIn0sImlhdCI6MTY5MDYyNTkxN30.XLzDOSEsnn_BJn_wrIYUU_SZEga-tmkoQnRZeauTf2o'
          },
          body:JSON.stringify({title,description,tag})
        })
        console.log(response)
    let editednote=JSON.parse(JSON.stringify(notes))
       for(let i=0;i<notes.length;i++){
        const element=editednote[i];
        if(element._id===id){
          editednote[i].title=title;
          editednote[i].description=description;
          editednote[i].tag=tag;
          break;
       }
      }
      setnotes(editednote);
    }
  return (
  <>
  <Notecontext.Provider value={{notes,setnotes,Addnote,deletenote,getnotes,editnote}}>
    {props.children}
  </Notecontext.Provider>
  </>
  )
}

export default Notestate
