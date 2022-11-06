import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Mean from "./components/mean/Mean";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Mean/>
            <Skills/>
        </div>
    );
}

export default App;
