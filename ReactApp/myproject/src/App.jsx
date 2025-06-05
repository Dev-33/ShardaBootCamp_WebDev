import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login"
import Register from "../src/components/Register"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
