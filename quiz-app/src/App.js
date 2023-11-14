import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rules from './components/Quiz/Rules.js';
import Home from './components/Home';
import Play from './components/Quiz/Play'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play/instructions" exact element={<Rules />} />
        <Route path="/play/quiz" exact element={<Play />} />
      </Routes>
      
    </Router>
  );
}

export default App;
