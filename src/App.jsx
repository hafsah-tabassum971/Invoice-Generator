import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import WhyBest from "./components/WhyBest";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <WhyBest />
      <Features />
      <Faqs />
    </>
  );
}

export default App;

