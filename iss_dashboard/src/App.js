import React from "react";
import { Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import "./App.css";
import Tracking from '../src/pages/Tracking/Tracking';
import { inject } from '@vercel/analytics';

inject()

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <Header />
                <Routes>
                <Route exact path="/" element={<Tracking />} />
                </Routes>
                
            </div>
        </React.StrictMode>
    );
}



export default App;