import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Verify_otp = (props) => {
  const host="http://localhost:4100/";
  //const host="https://finance-junction.onrender.com/"
  let navigate=useNavigate();
  const [Otp,setOtp]=useState('')
  const echange=(e)=>{
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  }
  const verify= async ()=>{
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
          alert(json.message);
           localStorage.removeItem('token');
           navigate('/journal/verification');
         }
  }
  return (
    <>
    <body className="container-fluid bg-body-tertiary d-block">
  <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4" style={{minWidth: '500px'}}>
        <div className="card bg-white mb-5 mt-5 border-0" style={{boxShadow: '0 12px 15px rgba(0, 0, 0, 0.02)'}}>
          <div className="card-body p-5 text-center">
            <h4>Verify</h4>
            <p>Your code was sent to you via email</p>
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
            <button className="btn btn-primary mb-3" onClick={verify}>
              Verify
            </button>
            <p className="resend text-muted mb-0">
              Didn't receive code? <a href="">Request again</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  <div className={`footer text-${props.Mode==='light'?'dark':'light'}`}>
    Made with ❤️ by Finance-Junction | Visit <a className={`text-${props.Mode==='light'?'dark':'light'}`}style={{color:`${props.Mode==='light'?'rgba(0,0,0,0.8)':'rgba(200,200,200,0.8)'}`}} href="https://finanace-junction.netlify.app" target="_blank">Finance-Junction</a>
  </div>
</body>
    </>
  )
}

export default Verify_otp