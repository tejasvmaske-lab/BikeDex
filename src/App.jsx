import "./App.css"
import Hero from "../src/pages/Hero"
import { useState } from 'react'
import WhyBikeDex from "../src/pages/WhyBikeDex";
import About from "../src/pages/About";
import HowItWorks from "../src/pages/HowItWorks";
import Trust from "../src/pages/Trust";

function App() {
  return (
    <>
      <Hero />
      <WhyBikeDex />
      <About />
      <HowItWorks />
      <Trust />
    </>
  );
};

export default App;