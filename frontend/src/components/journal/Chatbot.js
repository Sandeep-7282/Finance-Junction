import React, { useState } from 'react'
const Chatbot = (props) => {
const [textinside,Text]=useState("");
const change=(e)=>{
    e.preventDefault();
    Text(e.target.value);
}
const ask=async()=>{
	const url = 'https://chatgpt-api8.p.rapidapi.com/';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '201f50fafcmsh75f0f24e1e3bd8dp18afecjsn84ec4fedbc65',
			'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
		},
		body: [
			{
				content: 'resume vs intro',
				role: 'user'
			}
		]
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};
try {
	const response = await fetch(url, options);
	console.log(response);
	const result = await response.json();
  document.querySelector('.answer').textContent=result.answer.content;
	console.log(result);
} catch (error) {
	console.error(error);
}
}
  return (
    <>
    <div className='mx-5 my-3 '>
         <div className={`container text-${props.Mode==='light'?'dark':'light'}`} >
    <h1 className={`heading text-${props.Mode==='light'?'dark':'light'}`}>Enter Your Text Below</h1>
    </div>
          <textarea className="form-control my-2 " value={textinside}onChange={change} id="input" rows="5" placeholder='Enter Your Text Here' style={{backgroundColor:props.Mode==='light'?'white':'#c5c5c7',border:'2px solid grey',width:'80%'}}></textarea>
          <button className={`btn btn-outline-${props.Mode==='light'?'success':'info'}`} onClick={ask}>Ask</button>
          <p className={`mx-3 my-3 answer text-${props.Mode==='light'?'dark':'light'}`}></p>
          </div>
           </>
  )
}
export default Chatbot