import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import WhyBest from "./components/WhyBest";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WhyBest />
      <Features />
      <Faqs />
      <Footer/>
    </>
  );
}

export default App;

