import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
