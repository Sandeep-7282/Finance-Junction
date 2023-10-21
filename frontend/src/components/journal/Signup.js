import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
const Signup = (props) => {
    //const host="http://localhost:4100/";
    const host="https://finance-junction.onrender.com/"
    const [cred,setcred]=useState({name:"",email:"",password:"",cpassword:""})
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
    navigate('/journal/signup')
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
    let navigate=useNavigate();
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
  //console.log(json);
  console.log(json.authtoken)
    localStorage.setItem('token',json.authtoken)
    navigate('/journal')

if(!response.ok){
  localStorage.removeItem('token');
    alert(json.error);
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
    <input type="text" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}} id="name" name="name" value={cred.name} minLength={3} onChange={echange}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Email address</label>
    <input type="email" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} id="exampleInputEmail1"name="email" style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}}  value={cred.email} onChange={echange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Password</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}} id="password" name="password" value={cred.password} minLength={4} onChange={echange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>ConfirmPassword</label>
    <input type="password" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}} id="cpassword" name="cpassword" value={cred.cpassword} onChange={echange}/>
  </div>
  <button className={`btn btn-${props.Mode==='light'?'success':'info'}`} type='submit'>Sign Up</button>
</form>
<button id='Signin-btn' className='my-3'></button>
    </div>
  )
  }
export default Signup
