// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
// import Home from './Components/Home'
// import Alert from './Components/Alert'
import React, { useState } from 'react'

// // import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mainMode, setMode] = useState("light")
  const [toggleText, setToggleText] = useState("Enable Dark Mode")
  const [toggleTextColor, setToggleTextColor] = useState("dark")
  const [myStyle, newStyle] = useState({
    backgroundColor: "white",
    color: "black",
    border: "4px Solid Black"
  })

  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mainMode === "dark") {
      setMode("light")
      setToggleText("Enable Dark Mode")
      setToggleTextColor("dark")
      newStyle({
        backgroundColor: "white",
        color: "black",
        border: "4px Solid Black"
      })
      showalert("Light Mode is Enabled", "success")
      console.log(alert)

    } else if (mainMode === "light") {
      setMode("dark")
      setToggleText("Enable Light Mode")
      setToggleTextColor("light")
      newStyle({
        backgroundColor: "black",
        color: "white",
        border: "4px Solid white"
      })
      showalert("Dark Mode is Enabled", "danger")
      console.log(alert)
    }
  }



  return (
    <>
      {/* <Router> */}
        <Navbar title="First React Website" aboutPage=" Contact" mainMode={mainMode} toggleMode={toggleMode} toggleText={toggleText} toggleTextColor={toggleTextColor} />
        <Form toggleMode={toggleMode} myStyle={myStyle} />
        {/* <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/text" element={<Form toggleMode={toggleMode} myStyle={myStyle} />} />
        </Routes> */}
        {/* <Alert messageM={alert.message} typeT={alert.type} /> */}
        
      {/* </Router> */}
    </>
  );
}

export default App;
