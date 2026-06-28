import "./App.css"
import Hero from "../src/pages/Hero"
import { useState } from 'react'
import WhyBikeDex from "../src/pages/WhyBikeDex";
import About from "../src/pages/About";
import HowItWorks from "../src/pages/HowItWorks";
import Trust from "../src/pages/Trust";
import Footer from "../src/pages/Footer";
import Questionnaire from "./pages/Questionnaire";
import ElasticSlider from "./components/ElasticSlider/ElasticSlider";

function App() {
  return (
    <>
      <Hero />
      <WhyBikeDex />
      <About />
      <HowItWorks />
      <Trust />
      <Questionnaire />
      <Footer />
    </>
  );
};

export default App;