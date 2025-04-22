import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Home />
      <About />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
