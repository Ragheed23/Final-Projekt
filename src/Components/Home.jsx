import React, { useEffect, useState } from "react";
import "./Home.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Home() {
  return (
    <div>
      <div className="home-hero-bg">
        <h1>Wir sind immer die Besten</h1>
        <p>mit uns werden Sie zufrieden sein</p>
      </div>

      <section className="fcb-pokale">
        <Section1 />
      </section>

      <section className="fcb-museum">
        <Section2 />
      </section>
    </div>
  );
}

export default Home;
