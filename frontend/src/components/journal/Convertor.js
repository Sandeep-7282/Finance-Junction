import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
const Convertor = (props) => {
    let navigate=useNavigate();
    const [load,setload]=useState(false);
    const [cred,setcred]=useState({C1:"",C2:"",amount:"",result:""})
const submit=async(e)=>{
 e.preventDefault();
 setload(true);
 let currency1=document.getElementById('C1').value;
 let currency2=document.getElementById('C2').value;
 let amount=document.getElementById('amount').value;
   
 console.log(currency1,currency2,amount);
 const url = `https://fast-currency-convertor.p.rapidapi.com/api/Fetch-Currency/?amount=${amount}&fromCurrency=${currency1.toUpperCase()}&toCurrency=${currency2.toUpperCase()}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '201f50fafcmsh75f0f24e1e3bd8dp18afecjsn84ec4fedbc65',
		'X-RapidAPI-Host': 'fast-currency-convertor.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    setload(false);
	const res = await response.json();
	console.log(res);
    if(res.status){
  document.getElementById('result').value=res.value;
}
    else{
        document.getElementById('result').value='Not Found';
    }
  
} catch (error) {
	console.error(error);
}
  }
const echange=(e)=>{
    setcred({...cred,[e.target.name]:e.target.value})
  }
  return (
   <>
    <div className='mx-5 my-3cd ba' style={{width:'50%'}}>
       <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="name" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Currency-1</label>
    <input type="text" className={`form-control text-${props.Mode==='light'?'dark':'light'}`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}} id="C1" name="C1" value={cred.C1} onChange={echange}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Currency-2</label>
    <input type="text" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}} id="C2"name="C2" value={cred.C2} onChange={echange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Conversion Amount</label>
    <input type="number" className={`form-control text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}} id="amount" name="amount" value={cred.amount} onChange={echange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Result</label>
    <input type="text" readOnly className={`form-control text-${props.Mode==='light'?'dark':'light'}`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#5c6b79'}} id="result" name="result" value={cred.result} onChange={echange}/>
  </div>
  <div className="loadan">
  <button className={`btn btn-outline-${props.Mode==='light'?'success':'info'}`} type='submit'>Convert</button>
  {load?<Spinner/>:''} 
  </div>
</form>
    </div>
   </>
  )
}

export default Convertor