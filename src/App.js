import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Routes from "./Routes";
import './App.css'

import {useDispatch, useSelector} from "react-redux";
import {getAllDoas} from "./pages/home/homeSlice";


function App() {
  const {doas, loading} = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!doas.length) {
      dispatch(getAllDoas());
    }
  }, []);
  return (
    <div className="w-full h-full md:px-10 px-4 relative">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
