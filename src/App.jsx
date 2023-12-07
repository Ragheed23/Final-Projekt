import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import Neus from "./Components/Neus";
import Contact from "./Components/Contact";
import Sale from "./Sale";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/neus" Component={Neus} />
          <Route path="/sale" Component={Sale} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
