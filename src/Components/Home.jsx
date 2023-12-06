import React, { useEffect, useState } from "react";
import Hero from "../assets/arena.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src={Hero} alt="" className="home-hero" />
      <div className="home-hero-bg"></div>
      <h1>Title der Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in qui
        assumenda ratione ad mollitia provident autem sint fugiat voluptates,
        explicabo, quos doloribus delectus. Veniam quibusdam nulla asperiores
        dolorem tempora in aliquam, expedita possimus, facilis, labore dolores
        voluptas necessitatibus eos nesciunt maxime omnis. Porro autem modi quia
        qui odit voluptates dolore voluptate, deleniti doloribus culpa iure
        dicta, rem labore. Dolore suscipit, facere veritatis aut illo, quas
        consequatur magni sequi temporibus eveniet quo nulla officiis quaerat
        omnis molestiae minima iste. Totam sunt ad doloribus magnam. Inventore
        ipsam, iusto itaque laboriosam doloremque incidunt optio quas facere
        sapiente culpa dolor recusandae id vel.
      </p>

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
