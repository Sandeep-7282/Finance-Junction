import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Navbar({setroute,Mode,Toggle}) {
  let navigate=useNavigate();
    let location = useLocation();
    useEffect(() => {
          console.log(location.pathname);
      }, [location]);
      const logout=()=>{
        localStorage.removeItem('token');
        localStorage.clear();
        navigate('/journal/login')
      }
    const func=()=>{
      setroute(false);
    }
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link  to="/journal" className={`navbar-brand text-${Mode==='light'?'':'info'}`} style={{color:'#00FF00'}}>Journal</Link>
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
      <button className={`bg-dark mx-2 text-${Mode==='light'?'success':'info'}`} onClick={Toggle}><i class={`fa-solid fa-${Mode==='dark'?'sun':'moon'}`}></i></button>
      {!localStorage.getItem('token')? (<><Link className={`btn mx-3 btn-outline-${Mode==='light'?'success':'info'}`}    to="/journal/login" role="button">Login</Link>
      <Link className={`btn mx-3 btn-outline-${Mode==='light'?'success':'info'}`}    to="/journal/signup" role="button">Signup</Link></>): <button className={`btn btn-outline-${Mode==='light'?'success':'info'}`} onClick={logout}>Logout</button>}
      <Link className='nav-link' to="/" onClick={func} ><button className={`btn btn-outline-${Mode==='light'?'success':'info'}`}>News</button></Link>
    </div>
  </div>
</nav>
   </>
  )
}
