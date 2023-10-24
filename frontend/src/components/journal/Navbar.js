import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Navbar({setroute,Mode,Toggle,sette,te}) {
  let navigate=useNavigate();
    let location = useLocation();
      const logout=()=>{
        localStorage.removeItem('token');
        localStorage.clear();
        navigate('/journal/login')
      }
      const googleauth=()=>{
        window.open(`http://localhost:4100/auth/google/callback`,
        "_self")
      }
    const func=()=>{
      setroute(false);
    }
    const funct1=()=>{
      sette(false);
    }
    const editor1=()=>{
      sette(true);
    }
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    {!te?<Link  to="/journal" className={`navbar-brand text-${Mode==='light'?'':'info'}`} style={{color:'#00FF00'}}>Journal</Link>:<Link  to="/journal/editor" className={`navbar-brand text-${Mode==='light'?'':'info'}`} style={{color:'#00FF00'}}>Text Editor</Link>}
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/journal'?"active":""} `} aria-current="page" to="/journal">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/journal/about'?"active":""} `} to="/journal/about">About</Link>
        </li>
      </ul>
      <Link className='nav-link' to="/journal/translator"><button className={`btn btn-${Mode==='light'?'success':'info'}`}>Translator</button></Link>
      <Link className='nav-link' to="/journal/convertor"><button className={`btn btn-${Mode==='light'?'success':'info'}`}>C-Convertor</button></Link>
      <Link className='nav-link' to="/journal/chatbot"><button className={`btn btn-${Mode==='light'?'success':'info'}`}>Chatbot</button></Link>
      {!localStorage.getItem('token')? (<>
      <Link className={`btn mx-3 btn-${Mode==='light'?'success':'info'}`}    to="/journal/login" role="button">Login</Link>
      <Link className={`btn mx-3 btn-${Mode==='light'?'success':'info'}`}    to="/journal/signup" role="button">Signup</Link></>):
      <>{!te?<Link className='nav-link' to="/journal/editor"><button onClick={editor1} className={`btn btn-${Mode==='light'?'success':'info'}`}>Edit Text</button></Link>:<Link className="nav-link" to="/journal" ><button onClick={funct1} className={`btn btn-${Mode==='light'?'success':'info'}`}>Journal</button></Link>}
      <button className={`btn btn-${Mode==='light'?'success':'info'}`} onClick={logout}>Logout</button></>}
      <Link className='nav-link' to="/" onClick={func} ><button className={`btn btn-${Mode==='light'?'success':'info'}`}>News</button></Link>

      <button className={`bg-dark mx text-${Mode==='light'?'success':'info'}`} style={{width:'30px'}}onClick={Toggle}><i class={`fa-solid fa-${Mode==='dark'?'sun':'moon'}`}></i></button>
    </div>
  </div>
</nav>
   </>
  )
}
