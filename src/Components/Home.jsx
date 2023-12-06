import React, { useEffect, useState } from "react";
import Hero from "../assets/arena.jpg";
import "./Home.css";

function Home() {
  
  return (
    <div>

    
     
      <img src={Hero} alt="" className="home-hero"  /> 
      {/* <div className="home-hero-bg"></div> */}
     
    </div>
  );
}

export default Home;
