import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import Neuheiten from "./Components/Neuheiten";
import WeinachtsRabbatt from "./Components/WeinachtsRabbatt";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/neuheiten" Component={Neuheiten} />
          <Route path="/weinachtsrabbatt" Component={WeinachtsRabbatt} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
