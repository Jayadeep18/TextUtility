import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [myMode, setmyMode] = useState("light");
  const togglemode = () => {
    if (myMode === "light") {
      setmyMode("dark");
      firealert("DarkMode enabled!", "dark");
      document.body.style.backgroundColor = "#000033";
      document.body.style.color = "white";
    } else {
      setmyMode("light");
      firealert("LightMode enabled!", "primary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  // const [message, setmessage] = useState('Default message');
  // const [type, settype] = useState('success');
  // const firemessage=(passed_message,passed_type)=>{
  //      setmessage(passed_message);
  //      settype(passed_type);
  // }
  const [alert, setalert] = useState(null);
  const firealert = (passed_message, passed_type) => {
    setalert({
      message: passed_message,
      type: passed_type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    
      <Router>
        <NavBar title="TextUtilityApp"
        abouttext="About Us"
        mode={myMode}
        toggle={togglemode}
        firealert={firealert}/>
        <Alert myalert={alert} />
        <Routes>
        <Route path="/" element={<TextForm heading="TextArea" mode={myMode} firealert={firealert} />}/>        
        <Route path="/about" element={<About mode={myMode}/>}/>
        <Route path="*" element={<><h1 className="mx-auto text-center mt-5">NO ROUTE EXIST</h1></>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
