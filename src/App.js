import './App.css';
import React,{useState} from 'react'

import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';

function App() {
  const [myStyle,setMyStyle]=useState({
      color:"black",
      backgroundColor:"white"
    });
    
    const [btntext,setbtntext]=useState("Enable dark mode");

    const [bordercolor,setBorderColor]=useState("1px solid black");

    const [Meaning,setMeaning]=useState("");

    const[currTab,setcurrTab]=useState('home');

    const [searchWord,setSearchWord]=useState("");

    const togglestyle=()=>{
      if(myStyle.color==="black"){
        setMyStyle({
          color:"white",
          backgroundColor:"black"
        })
        setbtntext("Disable dark mode");
        setBorderColor("1px solid white");
        setalertstate("Dark Mode enabled");
      }
      else{
        setMyStyle({
          color:"black",
          backgroundColor:"white"
        })
        setbtntext("Enable dark mode");
        setBorderColor("1px solid black");
      }
    }

    const onSearch=async (text)=>{
      setSearchWord(text);
      if(!text.trim ()){
      setMeaning("please enter any word");
      return;
    }
    else{
      const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
      const data=await response.json();
      if(data[0]?.meanings?.[0]?.definitions?.[0]?.definition){
        setMeaning(data[0]?.meanings?.[0]?.definitions?.[0]?.definition);
      }
      else{
        setMeaning("Sorry!Meaning not found!!!");
      }
    }
  };
  
  const handleTabChange=(tab)=>{
    setcurrTab(tab);
  }
  
  const [alert,setalert]=useState(null);
  

  const setalertstate=(text)=>{
    setalert(text);
    setTimeout(()=>setalert(null),1500);
  };

  return (
    <div style={myStyle} className="min-vh-100"> 
      {alert && <div className="alert alert-success my-5" role="alert">
      {alert}
      </div>}
    <Navbar title="TextUtils" aboutText="About" style={myStyle} btntext={btntext} togglestyle={togglestyle} bordercolor={bordercolor} onSearch={onSearch} onTabChange={handleTabChange} createalert={setalertstate}/>
    <div className="container my-3" style={{paddingTop:"90px"}}>
      {currTab==='home' && <TextForm style={myStyle} btntext={btntext} togglestyle={togglestyle} Meaning={Meaning} searchWord={searchWord} createalert={setalertstate} />}
      {currTab==='about' && <About style={myStyle} ></About>}
    </div>
    </div>
  );
}

export default App;
