import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import section1  from "./Components/section1";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/news" Component={News} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
