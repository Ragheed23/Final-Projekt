import React, { useEffect, useState } from "react";
import Hero from "../assets/arena.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-hero-bg">
        <h1>Title der Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptates quibusdam laborum vero. Dolorum ratione unde placeat
          voluptatum maxime odio explicabo iusto optio quos nostrum quis ex
          maiores, blanditiis alias at accusamus quisquam! Quis, molestiae.
        </p>
      </div>

      <section>
        <h1>section1</h1>
      </section>

      <section>
        <h1>section2</h1>
      </section>

      <section>
        <h1>section3</h1>
      </section>

      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default Home;
