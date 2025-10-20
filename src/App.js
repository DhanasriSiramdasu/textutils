import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });

  const [btntext, setbtntext] = useState("Enable dark mode");

  const [bordercolor, setBorderColor] = useState("1px solid black");

  const [Meaning, setMeaning] = useState("");

  const [currTab, setcurrTab] = useState('home');

  const [searchWord, setSearchWord] = useState("");



  const togglestyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black"
      })
      setbtntext("Disable dark mode");
      setBorderColor("1px solid white");
      setalertstate("Dark Mode enabled");
    }
    else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setbtntext("Enable dark mode");
      setBorderColor("1px solid black");
    }
  }

  const handleTabChange = (tab) => {
    setcurrTab(tab);
  }

  const [alert, setalert] = useState(null);


  const setalertstate = (text) => {
    setalert(text);
    setTimeout(() => setalert(null), 1500);
  };

  return (
    <div style={myStyle} className="min-vh-100">
      {alert &&
        <div className="alert alert-success my-5" role="alert">
          {alert}
        </div>}
      <div className="Navbar">
        <Navbar title="TextUtils" aboutText="About" style={myStyle} btntext={btntext} togglestyle={togglestyle} bordercolor={bordercolor} onTabChange={handleTabChange} createalert={setalertstate} />
      </div>
      <div className="container my-3" style={{ paddingTop: "90px" }}>
        {currTab === 'home' && <TextForm style={myStyle} btntext={btntext} togglestyle={togglestyle}  createalert={setalertstate} />}
        {currTab === 'about' && <About style={myStyle} ></About>}
      </div>
    </div>
  );
}

export default App;
