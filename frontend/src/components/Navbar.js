import React  from 'react'
import { Link } from "react-router-dom";
const NavBar = ({ search, onSearchChange,Mode,Toggle}) => {
    const submit=(e)=>{
           e.preventDeafault();
    }
    const change=(e)=>{
        onSearchChange(e);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div  >
                    <Link className="navbar-brand" to="/"  style={{color:'#00FF00'}}>Finanace Junction</Link></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/Nationalstockexchange">NSE</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Bombaystockexchange">BSE</Link></li>
                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false" to="/commodities">Commodities</Link>
                            <ul className="dropdown-menu bg-dark">
                                 <li><Link className="dropdown-item text-light" to="/commodities">All Commodities</Link></li>
                                 <li><Link className="dropdown-item text-light " to="/commodities/agricultural">Agricultural</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/commodities/metals">Metals</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/commodities/energy">Energy</Link></li>
                                 <li><hr className="dropdown-divider text-light"/></li>
                                 <li><Link className="dropdown-item text-light" to="/mcx">MCX</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/ncdex">NCDEX</Link></li>
                            </ul>
                            </li>
                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false" to="/cryptocurrency">Cryptocurrency</Link>
                            <ul className="dropdown-menu bg-dark">
                            <li><Link className="dropdown-item text-light" to="/cryptocurrency">All Coins</Link></li>
                                 <li><Link className="dropdown-item text-light " to="/crypto/bitcoin">Bitcoin</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/ethereum">Ethereum</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/stablecoins">Stable-Coins</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/defi">DeFi</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/blockchain">Blockchain-Technology</Link></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/smartcontracts">Smart-Contracts</Link></li>
                                 <li><hr className="dropdown-divider text-light"/></li>
                                 <li><Link className="dropdown-item text-light" to="/crypto/altcions">Altcoins</Link></li>                            </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/nft">NFTs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/metaverse">Metaverse</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/economics">Economics</Link></li>
                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false" to="/general">More</Link>
                            <ul className="dropdown-menu bg-dark">
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link"   to="/journal"><button className={`btn btn-${Mode==='light'?'success':'info'}`} >Journal</button></Link></li>

                        </ul>
                        <form className="d-flex " role="search" onSubmit={submit}>
        <input className="form-control me-2" type="search" placeholder="Search" id="search" style={{backgroundColor:'#BCCBC9'}} value={search} onChange={change} aria-label="Search"/>
        <button className={`btn btn-${Mode==='light'?'success':'info'}`}   type="submit"><Link className={`nav-link text-light`} to={`/${search}`} >Search</Link></button>
        </form>
         </div>
                    <button className={`bg-dark mx-2 text-${Mode==='light'?'success':'info'}`} style={{width:'30px'}} onClick={Toggle}><i class={`fa-solid fa-${Mode==='dark'?'sun':'moon'}`}></i></button> 
          </div></nav>
        </div>
    )
}
export default NavBar
