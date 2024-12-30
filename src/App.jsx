import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skill from './components/Skill.jsx'
import Contact from './components/Contact.jsx'
import Chatbot from "./components/Chatbot.jsx"

function App() {

  return (
    <>
    <div>
      <div>
        <Header />
        <Home />
        <hr />
        <About />
        <hr />
        <Project />
        <hr/>
        <Skill />
        <hr />
        <Contact />
      </div>
      <Chatbot />
    </div>
    </>
  );
}

export default App
