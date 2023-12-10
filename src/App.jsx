import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/news" Component={News} />
          <Route path="/contact" Component={Contact} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
