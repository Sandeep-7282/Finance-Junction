import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = (props) => {
  //const host="http://localhost:4100/";
  const host="https://finance-junction.onrender.com/"
    let navigate=useNavigate();
        const [cred,setcred]=useState({email:"",password:""})
        const [ggluser,setUser]=useState({name:"",email:"",password:""})
        const handlecallback=async (res)=>{
        var user=await (jwt_decode(res.credential))
          ggluser.name=user.name;
          ggluser.email=user.email;
          console.log(ggluser)
        const response=await fetch(`${host}api/auth/googlesignup`,{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify({name:ggluser.name,email:ggluser.email})
     });
     const json=await response.json()
       //console.log(json);
       //console.log("user_id auth token:"+json.authtoken)
         localStorage.setItem('token',json.authtoken)
         navigate('/journal')
     if(!response.ok){
       localStorage.removeItem('token');
         alert('Error Occured');
         navigate('/journal/login')
     }
           }
         useEffect(()=>{
           /* global google */
           google.accounts.id.initialize({
             client_id:"447529429003-3a1j0fkh4mnravpv0blf6cunivel3ot1.apps.googleusercontent.com"
             ,callback: handlecallback
           })
           google.accounts.id.renderButton(
             document.getElementById("Signin-btn"),
             {theme:"outline", size:"large"}
           )
         },[])

    const submit=async(e)=>{
     e.preventDefault();
     const response=await fetch(`${host}api/auth/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:cred.email,password:cred.password})
    });
    console.log(response)
    const json=await response.json()
    console.log(json);
      console.log(json.authtoken)
        localStorage.setItem('token',json.authtoken)
        navigate('/journal')
    
    if(!response.ok){
      localStorage.removeItem('token');
        alert(json.error);
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
    <input type="email" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}}   name="email" onChange={echange}value={cred.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Password</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}}  name="password" onChange={echange} value={cred.password} id="exampleInputPassword1"/>
  </div>
 <button className={`btn my-2 btn-${props.Mode==='light'?'success':'info'}`} type='submit'>Login</button>
</form>
<button id='Signin-btn' className='my-2'></button>
    </div>
  )
}
export default Login
