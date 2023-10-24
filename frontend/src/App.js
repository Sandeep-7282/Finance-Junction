import './App.css';
import React, { useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import News from './components/News';
import Text from './components/journal/Text'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Home from './components/journal/Home';
import About from './components/journal/About'
import Login from './components/journal/Login'
import Signup from './components/journal/Signup'
import Navbar2 from './components/journal/Navbar';
import Notestate from './components/journal/context/Notestate';
import Convertor from './components/journal/Convertor';
import Chatbot from './components/journal/Chatbot';
import Translator from './components/journal/Translator';
import Verify_otp from './components/journal/Verify_otp';
import Forgotpassword from './components/journal/Forgotpassword';
import Changepassword from './components/journal/Changepassword';

const App = ()=> {
  //const host="http://localhost:4100/";
    const host="https://finance-junction.onrender.com/"
  const [passwordchange,setpasswordchange]=useState(false);
  const [email,setemail]=useState('');
  const pageSize = 5;
  const apiKey =process.env.REACT_APP_API_KEY_2;
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState('');
  const [mode,setmode]=useState('light');
  let [isJournalRoute,setroute]=useState(false);
  const [te,sette]=useState(false);
  let location = useLocation();
  useEffect(() => {
    setroute(
      location.pathname === '/journal' ||     location.pathname === '/journal/' ||
      location.pathname === '/journal/about' ||
      location.pathname === '/journal/signup' ||
      location.pathname === '/journal/login'||
      location.pathname === '/journal/forgotpassword'||
      location.pathname === '/journal/verification'||
      location.pathname === '/journal/changepassword'||
      location.pathname === '/journal/editor'||
      location.pathname === '/journal/convertor'||
      location.pathname === '/journal/translator'||
      location.pathname === '/journal/chatbot'
    );
  }, [location]);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor='#BCCBC9';
      setmode('light');
     }
      else{
        document.body.style.backgroundColor='#121212';
        setmode('dark');
      }
  },[])
  const toggle=()=>{
    if(mode==='light'){
       setmode('dark');
      document.body.style.backgroundColor='#121212';
      }
       else{
        document.body.style.backgroundColor='#BCCBC9';
        setmode('light');
       }
  }
    return (
     <>
         {isJournalRoute?  (
        <Navbar2 setroute={setroute} Mode={mode} Toggle={toggle} sette={sette} te={te}/>
      ):(
        <NavBar search={search} onSearchChange={handleSearchChange} Mode={mode} Toggle={toggle} />
      )}
        <LoadingBar height={3} color='#7CFC00' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} key="business" apiKey={apiKey}  pageSize={pageSize} word='business' />}></Route> 
          <Route exact path="/Nationalstockexchange" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey} key="nse"  word='nse' pageSize={pageSize}/>}></Route> 
          <Route exact path="/Bombaystockexchange" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey} key="bse" word='bse' pageSize={pageSize} />}></Route> 
          <Route exact path="/commodities" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="commodities" word='commodities'/>}></Route> 
          <Route exact path="/commodities/agricultural" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="agricultural commodities"  word='agricultural commodities' />}></Route> 
          <Route exact path="/commodities/metals" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="metal commodities" word='metal commodities'/>}></Route> 
          <Route exact path="/commidities/energy" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="energy commodities" word='energy commodities' />}></Route> 
          <Route exact path="/mcx" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="mcx commodities"  word='mcx commodities' />}></Route> 
          <Route exact path="/ncdex" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="ncdex commodities" word='ncdex commodities' />}></Route> 
          <Route exact path="/cryptocurrency" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="crypto" word='crypto' />}></Route> 
          <Route exact path="/crypto/bitcoin" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="bitcoin" word='bitcoin' />}></Route> 
          <Route exact path="/crypto/ethereum" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="ethereum" word='ethereum' />}></Route> 
          <Route exact path="/crypto/stablecoins" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="crypto stable coins" word='crypto stable coins' />}></Route> 
          <Route exact path="/crypto/defi" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="crypto defi coins" word='crypto defi coins' />}></Route> 
          <Route exact path="/crypto/blockchain" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='blockchain' word='blockchain technology' />}></Route> 
          <Route exact path="/crypto/smartcontracts" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='crypto smartcontracts'  word='crypto smartcontracts' />}></Route> 
          <Route exact path="/crypto/altcoins" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='crypto altcoins' word='crypto altcoins' />}></Route> 
          <Route exact path="/nft" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='nfts' word='nfts' />}></Route> 
          <Route exact path="/metaverse" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='metaverse' word='metaverse' />}></Route> 
          <Route exact path="/economics" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='economics' word='economics' />}></Route> 
          <Route exact path="/entertainment" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='entertainment' word='entertainment' />}></Route> 
          <Route exact path="/general" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='general news india' word='general news india' />}></Route> 
          <Route exact path="/health" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='health' word='health' />}></Route> 
          <Route exact path="/science" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='science' word='science' />}></Route> 
          <Route exact path="/sports" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='sports' word='sports' />}></Route> 
          <Route exact path="/technology" element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key='technology' word='technology' />}></Route> 
          <Route exact path={`/${search}`} element={<News  Mode={mode} Toggle={toggle} setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key={`${search}`} word={`${search}`} />}></Route> 
          <Route exact path="/journal" element={<><Notestate><Home Mode={mode}/></Notestate></>}></Route>
         <Route exact path="/journal/about" element={<><div className="container my-5"><About Mode={mode} Toggle={toggle}/></div></>}></Route>
         <Route exact path="/journal/login" element={<><div className="container my-5"><Login Mode={mode} host={host} Toggle={toggle}/></div></>}></Route>
         <Route exact path="/journal/forgotpassword" element={<><div className="container my-5"><Forgotpassword Mode={mode} host={host} Toggle={toggle} setemail={setemail} setpasswordchange={setpasswordchange}/></div></>}></Route>
         <Route exact path="/journal/verification" element={<><div className="container my-5"><Verify_otp Mode={mode} host={host}  passwordchange={passwordchange} email={email} Toggle={toggle}/></div></>}></Route>
         <Route exact path="/journal/changepassword" element={<><div className="container my-5"><Changepassword Mode={mode} host={host} email={email} Toggle={toggle}/></div></>}></Route>
         <Route exact path="/journal/signup" element={<><div className="container my-5"><Signup Mode={mode} 
        host={host} Toggle={toggle}/></div></>}></Route>
         <Route exact path="/journal/editor"  element={<Text Mode={mode} Toggle={toggle}/>}></Route>
         <Route exact path="/journal/convertor"  element={<Convertor Mode={mode} Toggle={toggle}/>}></Route>
         <Route exact path="/journal/chatbot"  element={<Chatbot Mode={mode} Toggle={toggle}/>}></Route>
         <Route exact path="/journal/translator"  element={<Translator Mode={mode} Toggle={toggle}/>}></Route>
            </Routes>
      </>
    )
}
export default App;