import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  //const host="http://localhost:4100/";
const host="https://finance-junction-xmer.onrender.com"
    let navigate=useNavigate();
        const [cred,setcred]=useState({email:"",password:""})
    const submit=async(e)=>{
     e.preventDefault();
     const response=await fetch(`${host}api/auth/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:cred.email,password:cred.password})
    });
    const json=await response.json()
    console.log(json);
    
      console.log(json.authtoken)
        localStorage.setItem('token',json.authtoken)
        navigate('/journal')
    
    if(!response.ok){
      localStorage.removeItem('token');
        alert('Invalid credentials');
        navigate('/journal/login')
    }
}
    const echange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
      }
  return (
    <div className='container my-5' style={{width:'60%'}}>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Email address</label>
    <input type="email" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`}   name="email" onChange={echange}value={cred.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Password</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'light':'dark'}`}  name="password" onChange={echange} value={cred.password} id="exampleInputPassword1"/>
  </div>
 <button className={`btn btn-outline-${props.Mode==='light'?'success':'info'}`} type='submit'>Login</button>
</form>
    </div>
  )
}
export default Login
