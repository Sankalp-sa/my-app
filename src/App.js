import "./App.css";
import Navbar from "./Compnents/Navbar";
import TextForm from "./Compnents/TextForm";
import About from './Compnents/About'
import React,{useState} from "react";
import Alert from "./Compnents/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState("light");
  const [enable,disable] = useState("Enable Dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const toggle = () =>{
    
    if(mode === "light"){
      setMode("dark")
      disable("Disable dark mode")
      document.body.style.backgroundColor = '#060680'
      showAlert("Dark mode activated","success")
    }
    else{
      setMode("light")
      disable("Enable dark mode")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode activated","success")
    }

  }

  return (
    <>
      {/* <Navbar /> */}
        {/* <Navbar title="TextUtiles" aboutText="About Us" mode={mode} enable={enable} toggle={toggle}/>
        <Alert alert={alert} mode={mode}/> */}
      <Router>
        <Navbar title="TextUtiles" aboutText="About Us" mode={mode} enable={enable} toggle={toggle}/>
        <Alert alert={alert} mode={mode}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse" mode={mode}/>}/>
          </Routes>   
          
        </div>
      </Router>
      {/* <TextForm showAlert={showAlert} heading="Enter your text to Analyse" mode={mode}/> */}

    </>
  );
}

export default App;
