import React,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
    console.log("title:",props.title);
    console.log("aboutText:",props.aboutText);
    
    const [wordinput,setwordinput]=useState("");

    const handlesubmit = (e) => {
      e.preventDefault();           // prevent page reload
      props.onSearch(wordinput);    // call App.js search
      setwordinput("");             // clear input
    };

  return (
    <div style={props.style}>
         <nav className="navbar navbar-expand-lg fixed-top" style={{border:props.bordercolor , backgroundColor: props.style.backgroundColor}}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/" style={props.style}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" style={props.style} onClick={()=>props.onTabChange('home')}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" style={props.style} onClick={()=>props.onTabChange('about')}> {props.aboutText}</button>
        </li>
      </ul>
      <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={()=>{props.togglestyle();props.createalert((props.style.color==="black")?"Dark mode is enabled!!":"Light mode is enabled!!")}}/>
          <label className="form-check-label mx-2" htmlFor="switchCheckDefault">{props.btntext}</label>
      </div>
      <form className="d-flex" role="search" onSubmit={handlesubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" id="meaning" aria-label="Search" value={wordinput} onChange={(e)=>setwordinput(e.target.value)} />
        <button className="btn btn-info" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

// Navbar.propTypes={
//     title:PropTypes.string,
//     aboutText:PropTypes.string
// }




