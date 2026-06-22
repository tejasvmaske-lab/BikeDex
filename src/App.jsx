import "./App.css"
import Hero from "../src/pages/Hero"
import { useState } from 'react'
import WhyBikeDex from "../src/pages/WhyBikeDex";
import About from "../src/pages/About";

function App() {
  return (
    <>
      <Hero />
      <WhyBikeDex />
      <About />
    </>
  );
};

export default App;