import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState();
  const [img, setImg] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    axios
      .get("https://www.tagesschau.de/api2u/search/?searchText=Bundesliga")
      .then((res) => {
        // debugger;
        console.log(res.data);
        setNews(res.data.searchResults[0].title);
        setImg(res.data.searchResults[0].images[0].imageVariants["16x9-512"]);
        setUrl(res.data.searchResults[0].shareURL);
      });
  }, []);
  return (
    <div>
        <h1>++++++++++++++++++++ News ++++++++++++++++++++</h1>
      <img  src={img} alt=""/>
      <p>{news}</p>
    
      <a href={url} target="_blank">Bitte Lesen</a>
    </div>
  );
}

export default News;
