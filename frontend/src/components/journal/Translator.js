import React, { useEffect } from 'react'
import { useState } from 'react'

const Translator = (props) => {
  const[to,setto]=useState('');
  const [lang,setlang]=useState([]);
    const [cred,setcred]=useState({input:"",amount:"",lan:""})
    const [trans,settrans]=useState(true);
    const echange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
      }
      useEffect(() => {
        const fetchData = async () => {
            const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
                    'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result)
                setlang(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    
      const knowntrans=async()=>{
        const url = 'https://google-translate105.p.rapidapi.com/v1/rapid/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'google-translate105.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: document.getElementById('input').value,
		to_lang: document.getElementById('to').value,
		from_lang: document.getElementById('from').value
	})
};

try {
	const response = await fetch(url, options);
  console.log(response)
	const result = await response.json();
  console.log(result)
  document.getElementById('amount').value=result.translated_text;
} catch (error) {
	console.error(error);
}
      }
      const unknowntrans=async()=>{
        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
            },
            body: new URLSearchParams({
                from: 'auto',
                to: 'en',
                text: document.getElementById('input').value
            })
        };
        try {
            const response = await fetch(url, options);
            const data=await response.json();
            console.log(data);
            document.getElementById('amount').value = data.trans;
            document.getElementById('lan').value=data.source_language;
        } catch (error) {
            console.error(error);
        }
      }
  return (
    <div className="mb-3 container my-5">
     {!trans?(<><div className="mb-3 my-5" style={{width:'80%'}}>
    <label htmlFor="exampleInputPassword1" className={`form-label my-2 text-${props.Mode==='light'?'dark':'light'}`}>Enter Text</label>
    <textarea type="text" className={`form-control my-2 text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="input" name="input" value={cred.input} onChange={echange}/>
    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}>Translated Text</label>
    <textarea type="text" readOnly className={`form-control my-2 text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="amount" name="amount" value={cred.amount} onChange={echange}/>
    <label htmlFor="exampleInputPassword1" className={`form-label my-2 text-${props.Mode==='light'?'dark':'light'}`}>Entered Text Language</label>
    <input type="text" readOnly className={`form-control text-${props.Mode==='light'?'dark':'light'}`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="lan" name="lan" value={cred.lan} onChange={echange}/>
  </div>
  <div className="min-con d-flex align-items-center gap-5">
  <button className={`btn btn-${props.Mode==='light'?'success':'info'}`} onClick={unknowntrans}>Translate</button>
  <p className={`text-${props.Mode==='light'?'success':'info'}`}>Translate Text of Known Language?
</p>
<button className={`btn btn-${props.Mode==='light'?'success':'info'}`} onClick={()=>{settrans(true);}}>Click Here</button>
  </div></>):(<><div className="mb-3 my-5" style={{width:'80%'}}>
    <div className="test-1 d-flex align-items-center gap-2">
    <p className={`text-${props.Mode==='light'?'dark':'light'} my-2`}>From</p>
    <select name="from" id="from" style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}}>
  {lang.map((val, ind) => (
    <option key={ind} value={val.code} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}}>
      {val.language}
    </option>
  ))}
</select>
    </div>
    <textarea type="text" className={`form-control my-2 text-${props.Mode==='light'?'dark':'light'}`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="input" name="input" value={cred.input} onChange={echange}/>
    <div className="test-1 d-flex align-items-center gap-2">
    <p className={`text-${props.Mode==='light'?'dark':'light'} my-2`}>To</p>
    <select className='mx-4' name="to" id="to" style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}}>
  {lang.map((val, ind) => ( 
    <option key={ind} value={val.code} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}}>
      {val.language}
    </option>
  ))}
</select>
    </div>
    <textarea type="text" readOnly className={`form-control my-2 text-${props.Mode==='light'?'dark':'light'}`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none'}} id="amount" name="amount" value={cred.amount} onChange={echange}/>
  </div>
  <div className="min-con d-flex align-items-center gap-5">
  <button className={`btn btn-${props.Mode==='light'?'success':'info'}`} onClick={knowntrans}>Translate</button>
  <p className={`text-${props.Mode==='light'?'success':'info'} my-2`}>Translate Text of Unknown Language?</p>
<button className={`btn btn-${props.Mode==='light'?'success':'info'}`} onClick={()=>{settrans(false);}}>Click Here</button>
  </div></>)}
    </div>
  )
}
export default Translator