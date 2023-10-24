import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
const Verify_otp = ({Mode,passwordchange,host,email,setpasswordchange}) => {
  let navigate=useNavigate();
  const [loader,setloader]=useState(false)
  const [Otp,setOtp]=useState('')
 
  const echange=(e)=>{
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  }
  const verify= async (e)=>{
    e.preventDefault();
    setloader(true)
    if(!passwordchange){
          const response=await fetch(`${host}api/auth/verify-otp`,{
             method:'POST',
             headers:{
               'Content-Type':'application/json'
             },
             body:JSON.stringify({otp:Otp})
         });
         console.log(response)
         const json=await response.json()
         localStorage.setItem('token',json.authtoken)
        navigate('/journal')
         if(!response.ok){
          setloader(false)
          alert(json.message);
           localStorage.removeItem('token');
           navigate('/journal/verification');
         }
        }
        else{
          const response=await fetch(`${host}api/auth/change-pass-verification`,{
             method:'POST',
             headers:{
               'Content-Type':'application/json'
             },
             body:JSON.stringify({otp:Otp,email:email})
         });
         setpasswordchange(false)
        navigate('/journal/changepassword')
         if(!response.ok){
          setloader(false)
          const json=await response.json();
          alert(json.message);
          setpasswordchange(false)
           localStorage.removeItem('token');
           navigate('/journal/verification');
         }
        }
  }
  return (
    <>
    <body className="container-fluid  d-block" style={{backgroundColor:Mode==='light'?'#9fadab':'#1a1a1a'}}>
  <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4" style={{minWidth: '500px'}}>
        <div className="card mb-5 mt-5 border-0" style={{backgroundColor:Mode==='light'?'#90a29f':'#262626',boxShadow: '0 12px 15px rgba(0, 0, 0, 0.02)'}}>
          <div className="card-body p-5 text-center">
            <h4 className={` text-${Mode==='light'?'dark':'light'}`}>Verify</h4>
            <p className={` text-${Mode==='light'?'dark':'light'}`}>Your code was sent to you via email</p>
            <div className="otp-field mb-4">
            <input
                  type="number"
                  maxLength={6}
                  className="form-control"
                  inputMode="numeric"
                  placeholder="Enter OTP"
                  value={Otp}
                  onChange={echange}
                />
            </div>
         {!loader?<Link to='/changepassword'> <button className={`btn btn-${Mode==='light'?'success':'info'} mb-3`} onClick={verify}>
              Verify
            </button></Link>:<Spinner />}
            {/* <p className={`resend  mb-0 text-${Mode==='light'?'dark':'light'}`}> */}
              {/* Didn't receive code? <Link to='/journal/forgotpassword' className={`mx-1 text-${Mode==='light'?'success':'info'}`} style={{textDecoration:'none',textAlign:'center'}}> Request again</Link> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  
</body>
    </>
  )
}

export default Verify_otp