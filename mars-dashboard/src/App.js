import React from "react";
import { Routes } from "react-router-dom";
//import Header from "./components/Header/Header";
import { Route } from "react-router-dom";

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
          
      </div>
    </React.StrictMode>
  );
}

export default App;
