import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />   {/* header κεντραρισμένο */}
      <main>
        <Contact />
        <Bio />
        <Education />
        <Experience />
        <Skills />
        <Project />
        
      </main>
    </div>
  );
}

export default App;


