import React, { useState } from 'react'
const Chatbot = (props) => {
const [textinside,Text]=useState("");
const change=(e)=>{
    e.preventDefault();
    Text(e.target.value);
}
const ask=async()=>{
	const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
	},
	body: JSON.stringify({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content: document.getElementById('input').value
			}
		],
		temperature: 0.8
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	document.querySelector('.answer').textContent=result.choices[0].message.content;
} catch (error) {
	console.error(error);
}
};

  return (
    <>
    <div className='mx-5 my-3 '>
         <div className={`container text-${props.Mode==='light'?'dark':'light'}`} >
    <h1 className={`heading text-${props.Mode==='light'?'dark':'light'}`}>Enter Your Question Below</h1>
    </div>
          <textarea value={textinside} onChange={change} id="input" rows="5" placeholder='Enter Your Text Here' className={`form-control my-2 text-${props.Mode==='light'?'dark':'light'} `} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838',border:'none',width:'80%'}}></textarea>
          <button className={`btn btn-${props.Mode==='light'?'success':'info'}`} onClick={ask}>Ask</button>
          <p className={`mx-3 my-3 answer text-${props.Mode==='light'?'dark':'light'}`}></p>
          </div>
           </>
  )
}
export default Chatbot