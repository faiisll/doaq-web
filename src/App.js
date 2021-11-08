import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Routes from "./Routes";
import './App.css'


function App() {
  return (
    <div className="w-full h-full md:px-10 px-4">
    <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
    );
  }
  
  export default App;
  