import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    //const host="http://localhost:4100/";
     const host="https://finance-junction.onrender.com"
    let navigate=useNavigate();
    const [cred,setcred]=useState({name:"",email:"",password:"",cpassword:""})
const submit=async(e)=>{
 e.preventDefault();
 let pass=document.getElementById('password').value;
 let cpass=document.getElementById('cpassword').value;
 if(cpass===pass){
 const {name,email,password}=cred;
 const response=await fetch(`${host}api/auth/createUser`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name,email,password})
});
const json=await response.json()
console.log(json);

  console.log(json.authtoken)
    localStorage.setItem('token',json.authtoken)
    navigate('/journal')

if(!response.ok){
  localStorage.removeItem('token');
    alert('Email already Exists');
    navigate('/journal/signup')
}
}
else{
   alert('password and confirm password are mismatched')
}
}

const echange=(e)=>{
    setcred({...cred,[e.target.name]:e.target.value})
  }
 
  return (
    <div className='container' style={{width:'70%'}}>
       <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="name" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Name</label>
    <input type="text" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`} id="name" name="name" value={cred.name} onChange={echange}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Email address</label>
    <input type="email" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`} id="exampleInputEmail1"name="email" value={cred.email} onChange={echange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Password</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`} id="password" name="password" value={cred.password} onChange={echange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>ConfirmPassword</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`} id="cpassword" name="cpassword" value={cred.cpassword} onChange={echange}/>
  </div>
  <button className={`btn btn-outline-${props.Mode==='light'?'success':'info'}`} type='submit'>Sign Up</button>
</form>
    </div>
  )
  }
export default Signup
