import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Spinner from '../Spinner'
const Forgotpassword = ({host,setpasswordchange,setemail,Mode}) => {
    const[email,setEmail]=useState('')
    //const[alerts,setalerts]=useState({success:false,failed:false})
    //const [alertmsg,setalertmsg]=useState({success:"",failed:""})
    const [loader,setloader]=useState(false);
    let navigate=useNavigate();
    setemail(email);
    const submit=async (e)=>{
      setloader(true)
        e.preventDefault();
        const response=await fetch(`${host}api/auth/forgotpassword`,{
           method:'POST',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify({email:email})
       });
       console.log(response)
       const json=await response.json()
       if(response.ok){
        setpasswordchange(true);
           navigate('/journal/verification')}
       if(!response.ok){
        setloader(false)
         localStorage.removeItem('token');
           alert(json.error);  
       }
       }

  return (
  <>
	<div className="row1">
		<h1>Forgot Password</h1>
		<h6 className="information-text text-light">Enter your registered email to reset your password.</h6>
		<div className="form-group">
    <p><label htmlFor="username">Email</label></p>
			<input type="email" name="email" id="user_email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
		
  {!loader?<button onClick={submit}>Reset Password</button>:<Spinner />}
		</div>
	</div>
  </>
  )
}

export default Forgotpassword