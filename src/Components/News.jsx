import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    axios
      .get("https://www.tagesschau.de/api2u/search/?searchText=fc%20bayern")
      .then((res) => {
        // debugger;
        console.log(res.data);
        setNews(res.data.searchResults[0].title);
        setImg(res.data.searchResults[0].images[0].imageVariants["16x9-512"]);
      });
  }, []);
  return (
    <div>
      <img
        src={img}        alt=""
      />
      <p>{news}</p>
      <h1>News</h1>
    </div>
  );
}

export default News;
