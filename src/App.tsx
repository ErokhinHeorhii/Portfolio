import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Mean from "./components/mean/Mean";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
    return (
        <div className="App">
            <Header/>
            <Mean/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
