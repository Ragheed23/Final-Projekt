import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css"

function News() {
  const [news, setNews] = useState();
  const [img, setImg] = useState();
  const [url, setUrl] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.tagesschau.de/api2u/search/?searchText=Bundesliga")
      .then((res) => {
        setData(res.data.searchResults);
        console.log(res.data.searchResults);
      });
  }, []);
  return (
    <div className="newsContainer">
      <h1>++++++++++++++++++++ News ++++++++++++++++++++</h1>
      {data.map((artikel, index) => (
        <div key={index}>
          <img src={artikel.teaserImage.imageVariants["16x9-512"]} alt="" />
          <p>{artikel.title}</p>

          <a href={artikel.shareUrl} target="_blank">
            Bitte Lesen
          </a>
        </div>
      ))}
    </div>
  );
}

export default News;
