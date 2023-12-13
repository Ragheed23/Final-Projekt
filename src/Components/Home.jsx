import React, { useEffect, useState } from "react";
import "./Home.css";
import  Section1  from "./Section1";

function Home() {
  return (
    <div>
      <div className="home-hero-bg">
        <h1>Wir sind immer die beste</h1>
        <p>
          mit uns werden Sie zufrieden sein
        </p>
      </div>

      <section>
    <Section1/>
      </section>

      <section>
        <h1>Mannschaft F.C. Bayern</h1>
        
      </section>

      <section>
        <h1>Allianz Arena</h1>
      </section>

     
    </div>
  );
}

export default Home;
