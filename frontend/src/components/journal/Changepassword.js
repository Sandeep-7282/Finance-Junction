import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
const Changepassword = ({email,host,Mode}) => {
    let navigate=useNavigate();
     const [password,setPassword]=useState({Password:"",confirmpass:""})
     const[alerts,setalerts]=useState({success:false,failed:false})
     const [alertmsg,setalertmsg]=useState({success:"",failed:""})
     const echange=(e)=>{
        setPassword({...password,[e.target.name]:e.target.value})
       }
       const passconfirmation=async(e)=>{
        e.preventDefault();
        if(password.Password===password.confirmpass){
     const response=await fetch(`${host}api/auth/changepassword`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({email:email,password:password.Password})
      });
      console.log(response)
      const json=await response.json()
      console.log(json)
      setalertmsg({success:json.message,failed:""})
     setalerts({success:true,failed:false})
   setTimeout(() => {
    navigate('/journal/login');
   }, 3000);

      if(!response.ok){
        setalertmsg({success:"",failed:json.message})
        setalerts({success:false,failed:true})
        navigate('/journal/changepassword')
      } }
      else{
        alert('You Entered wrong Re-enter Password')
      }
       }
  return (
   <>
   <div className="card  login-form1" style={{backgroundColor:Mode==='light'?'#9fadab':'#1a1a1a'}}>
	<div className="card-body ">
		<h3 className={`card-title text-center text-${Mode==='light'?'dark':'light'}`}>Change password</h3>
		<div className="card-text">
			<form className='form1'>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1"  className={` text-${Mode==='light'?'dark':'light'} `}>Your new password</label>
                    <input type="password" className={`form-control text-${Mode==='light'?'dark':'light'} `} style={{backgroundColor:Mode==='light'?'#748b88':'#383838',border:'none'}}   name="Password" onChange={echange} value={password.Password} id="exampleInputPassword1"/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1" className={` text-${Mode==='light'?'dark':'light'} `}>Repeat password</label>
                    <input type="password" className={`form-control text-${Mode==='light'?'dark':'light'} `} style={{backgroundColor:Mode==='light'?'#748b88':'#383838',border:'none'}}   name="confirmpass" onChange={echange} value={password.confirmpass} id="exampleInputPassword2"/>
				</div>
				<button  onClick={passconfirmation} className={`btn btn-${Mode==='light'?'success':'info'} btn-block submit-btn `}>Confirm</button>
			</form>
		</div>
        {alerts.success&&<div class="alert alert-success" role="alert">
    {alertmsg.success}.Redirecting to Login Page ....
    </div>}
       {alerts.failed&&<div class="alert alert-danger" role="alert">
    {alertmsg.failed}
       </div>}
	</div>
</div>
   </>
  )
}

export default Changepassword