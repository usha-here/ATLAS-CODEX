import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rules from './components/Quiz/Rules.js';
import Home from './components/Home';
import Play from './components/Quiz/Play';
import { useState, useEffect } from 'react';


function App() {
  const [activeQuestion,setActiveQuestion] =useState( JSON.parse(localStorage.getItem('MY_APP_STATE')) || null)

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE',JSON.stringify(activeQuestion));
  }, [activeQuestion]);
  

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>} />
        <Route path="/play/instructions" exact element={<Rules />} />
        <Route path="/play/quiz" exact element={<Play activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
