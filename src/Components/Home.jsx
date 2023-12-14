import React, { useEffect, useState } from "react";
import "./Home.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Home() {
  return (
    <div>
      <div className="home-hero-bg">
        <h4>JETZT BESTELLEN</h4>
        <h1>Das perfekte Geschenk - <br />Gutscheine für die Allianz Arena</h1>
       
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
